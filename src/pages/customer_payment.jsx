import { Link, useNavigate } from "react-router-dom";
import { PaymentMenu } from "../components/Payment_menu";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import user from "../db/user.json";

export const CustomerPayment = () => {
  const navigate = useNavigate();
  const [pay, setPay] = useState(false);
  const [payment, setPayment] = useState(true);
  const [Acustomer, setACustomer] = useState(user.customer[0].orderList);
  const [totalFoodCost, setTotalFoodCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const {
    web3,
    account,
    orderContract,
    order_c_address,
    exchangeRate,
    getExchangeRate,
  } = useContext(AppContext);

  const getTotalFoodCost = () => {
    let sum = 0;
    Acustomer.wishList.map((v) => {
      sum += v.cost * v.quantity;
    });
    setTotalFoodCost(sum);
  };

  useEffect(() => {
    getExchangeRate();
    getTotalFoodCost();
  }, []);

  const onClickOrder = async () => {
    var a = web3.utils.numberToHex(
      Number(
        (
          (totalFoodCost + Acustomer.deliveryFee + Acustomer.deliveryTip) /
          exchangeRate
        ).toFixed(0)
      )
    ); /*Number안에 음식값+배달비*/
    try {
      console.log(
        typeof ((Acustomer.deliveryFee / exchangeRate) * 10 ** 18),
        (totalFoodCost / exchangeRate) * 10 ** 18
      );
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .ordering(
                "0x74913Ee32a84941A71774439E0A3b581beF378cA" /*스토어 wallet*/,
                Number(totalFoodCost / exchangeRate).toFixed(0) /*음식값*/,
                Number(Acustomer.deliveryFee / exchangeRate).toFixed(
                  0
                ) /*배달비*/,
                Number(Acustomer.deliveryTip / exchangeRate).toFixed(0)
              )
              .encodeABI(),
            gas: "100000",
            value: a,
          },
        ],
      });
      navigate("/Acustomer/ordercomplete", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPay = () => {
    setPay(!pay);
  };
  const onClickPayment = () => {
    setPayment(!payment);
  };

  return (
    <div className="bg-[#F8F8F8]">
      <div className="bg-white w-[386px] h-14 absolute z-10"></div>
      <div className="flex justify-center pt-4">
        <div className="font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20">
          장바구니
        </div>
      </div>

      {pay ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[600px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 완료할까요?</div>
              <div className="text-caption">맛있고 빠르게 배달해드릴게요!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightGray w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickPay}
              >
                아직...
              </button>

              <button
                className="bg-lightYellow p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickOrder}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="bg-white mt-14 px-5 py-4 category-shadow">
        <div className="flex justify-between items-center">
          <div className="font-bold text-subtitle">{Acustomer.storeName}</div>
          <div>20~30분 후 도착</div>
        </div>
        <div className="flex justify-between items-end text-body border-t-[1.5px] pt-2 mt-2 border-lightGray">
          <div>{user.customer[0].cus_address}</div>
          <div className="text-caption text-purple">수정</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-white mt-4 px-5 py-4 category-shadow">
        {Acustomer.wishList.map((v, i) => (
          <PaymentMenu
            key={i}
            foodName={v.foodname}
            option="곱빼기"
            price={v.cost}
          />
        ))}
        <div className="text-center font-bold text-purple">+ 메뉴 추가</div>
      </div>

      <div className="bg-white mt-4 px-5 py-4 category-shadow">
        <div className="font-bold text-subtitle">결제 수단</div>
        <div className="flex mt-4">
          <input
            className="w-4 accent-purple"
            type="radio"
            name="radio"
            onClick={onClickPayment}
          />
          <span className="ml-2 text-caption font-bold">폴리곤으로 결제</span>
        </div>
        <div className="flex mt-2">
          <input
            className="w-4 accent-purple"
            type="radio"
            name="radio"
            onClick={onClickPayment}
          />
          <span className="ml-2 text-caption font-bold">BB 코인으로 결제</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white my-4 px-5 py-4 category-shadow">
        <div className="font-bold text-subtitle">결제금액</div>
        <div className="flex justify-between items-center mt-2">
          <div className="font-bold text-caption">총 주문금액</div>
          <div className="text-caption">{totalFoodCost}원</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-caption">배달비</div>
          <div className="text-caption">{Acustomer.deliveryFee}원</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-caption">배달팁</div>
          <div className="text-caption">{Acustomer.deliveryTip}원</div>
        </div>
        <div className="flex justify-between items-center border-t-[1.5px] pt-4 mt-4 border-lightGray">
          <div className="font-bold text-body">총 결제금액</div>
          {payment ? (
            <div className="font-bold text-subtitle">
              {totalFoodCost + Acustomer.deliveryFee + Acustomer.deliveryTip}원
            </div>
          ) : (
            <div className="font-bold text-subtitle">
              {`${Number(
                (
                  (totalFoodCost +
                    Acustomer.deliveryFee +
                    Acustomer.deliveryTip) /
                  exchangeRate
                ).toFixed(3)
              )}`}{" "}
              MATIC
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-white px-4 pb-4">
        <button
          className="flex justify-center gap-2 bg-lightYellow w-[350px] py-3 rounded-md text-subtitle font-bold text-black"
          onClick={onClickPay}
        >
          <span>
            {totalFoodCost + Acustomer.deliveryFee + Acustomer.deliveryTip}
          </span>
          결제하기
        </button>
      </div>
    </div>
  );
};
