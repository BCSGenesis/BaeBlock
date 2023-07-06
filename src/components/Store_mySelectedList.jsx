import { useContext, useState } from "react";
import testDB from "../db/testDB.json";
import { AppContext } from "../App";

export const StoreMySelectedList = () => {
  const [finished, setFinished] = useState(false);

  const { web3, account, orderContract, order_c_address } =
    useContext(AppContext);
  const onClickFinish = async () => {
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: order_c_address,
          data: orderContract.methods.cookFinish(0).encodeABI() /*주문번호*/,
          gas: "100000",
        },
      ],
    });
    setFinished(!finished);
  };

  return (
    <div className="flex flex-col">
      {finished ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">조리를 완료했어요!</div>
              <div className="text-caption">고객님께 조리 완료를 알려요!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickFinish}
              >
                완료
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {testDB.customer.map((v, i) => (
        <div
          key={i}
          className="bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow"
        >
          <div className="px-4 py-2">
            <div className="flex justify-between font-bold">
              <div>15분</div>
              <div>
                {testDB.customer[i].deliveryFee * 2 +
                  testDB.customer[i].deliveryTip}
                원
              </div>
            </div>
            <div className="text-caption">
              <div className="flex justify-between">
                {testDB.store[i].storeName}
                <span className="ml-8">거리</span>
              </div>
              <div className="flex">{testDB.store[i].address}</div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mb-2 mr-2">
            <button
              className="bg-lightYellow px-2 py-1 rounded-xl font-bold border-[1.5px] text-caption border-black"
              onClick={onClickFinish}
            >
              조리 완료
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
