import { useContext, useState } from "react";
// import storeNewOrder from "../db/storeNewOrder.json";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
export const StoreOrderList = () => {
  const navigate = useNavigate();
  const {
    web3,
    account,
    orderContract,
    order_c_address,
    getStoreOrderList,
    storeOrderList,
    setStoreOrderList,
  } = useContext(AppContext);
  const [accept, setAccept] = useState({});
  const [decline, setDecline] = useState({});
  const [toggle, setToggle] = useState({ index: null, type: null });

  const onClickConfirm = async (i, type) => {
    // 팝업창을 없앰.
    setToggle({ index: null, type: null });
    if (type === "accept") {
      setAccept({
        ...accept,
        [i]: true,
      });
      var order = await orderContract.methods.returnOrder(0).call();
      var a = web3.utils.numberToHex(
        Number(order.deliveryFee)
      ); /*해당 주문번호의 배달비*/
      try {
        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: order_c_address,
              data: orderContract.methods
                .storeAccept_Decline(0, true) /*주문번호,수락or거절*/
                .encodeABI(),
              gas: "100000",
              value: a,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    } else if (type === "decline") {
      setDecline({
        ...decline,
        [i]: true,
      });
      try {
        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: order_c_address,
              data: orderContract.methods
                .storeAccept_Decline(1, false) /*주문번호,수락or거절*/
                .encodeABI(),
              gas: "100000",
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onClickToggle = (i, type) => {
    setToggle({ index: i, type });
  };
  // const onClickAccept2 = async () => {
  //   var order = await orderContract.methods.returnOrder(0).call();
  //   var a = web3.utils.numberToHex(
  //     Number(order.deliveryFee)
  //   ); /*해당 주문번호의 배달비*/
  //   try {
  //     await window.ethereum.request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: account,
  //           to: order_c_address,
  //           data: orderContract.methods
  //             .storeAccept_Decline(0, true) /*주문번호,수락or거절*/
  //             .encodeABI(),
  //           gas: "100000",
  //           value: a,
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  //};
  // const onClickDecline2 = async () => {
  //   try {
  //     await window.ethereum.request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: account,
  //           to: order_c_address,
  //           data: orderContract.methods
  //             .storeAccept_Decline(1, false) /*주문번호,수락or거절*/
  //             .encodeABI(),
  //           gas: "100000",
  //         },
  //       ],
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const calculateTotalCost = (i) => {
    const orderList = storeOrderList[i].orderMenu;
    let totalCost = 0;

    orderList.forEach((item) => {
      const { price, quantity } = item;
      totalCost += price * quantity;
    });

    return totalCost;
  };

  return (
    <div className="flex flex-col ">
      {toggle.type === "accept" && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 수락해요!</div>
              <div className="text-caption">조리를 시작해주세요!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={() => onClickConfirm(toggle.index, "accept")}
              >
                수락
              </button>
            </div>
          </div>
        </div>
      )}

      {toggle.type === "decline" && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 거절할까요?</div>
              <div className="text-caption">주문을 취소해요.</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightGray w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={() => onClickConfirm(toggle.index, "decline")}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {storeOrderList.map((v, i) => {
        if (accept[i] || decline[i]) return null;
        return (
          <div
            key={i}
            className="bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow"
          >
            <div className="px-4 py-2">
              <div className="flex justify-between font-bold">
                <div className="flex flex-col">
                  {v.orderMenu.map((A, i) => (
                    <div className="w-[150px] flex justify-between" key={i}>
                      <div>{A.foodname}</div> <div>{A.quantity}개</div>
                    </div>
                  ))}
                </div>
                <div>총 {calculateTotalCost(i).toLocaleString()} 원</div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 pt-2">
              <div className="text-caption">
                배달비 : {v.deliveryFee.toLocaleString()} 원
              </div>
              <div className="flex justify-end gap-2 mb-2">
                <button
                  className="bg-lightGray px-2 py-1 rounded-xl font-bold border-[1.5px] border-black text-caption text-darkGray"
                  onClick={() => onClickToggle(i, "decline")}
                >
                  주문 거절
                </button>
                <button
                  className="bg-lightYellow px-2 py-1 rounded-xl font-bold border-[1.5px] text-caption border-black"
                  onClick={() => onClickToggle(i, "accept")}
                >
                  주문 수락
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
