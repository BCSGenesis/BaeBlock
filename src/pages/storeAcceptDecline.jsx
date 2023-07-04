//새로들어온 주문목록에 수락,거절버튼 추가
//var a = web3.utils.numberToHex(Number(order의 배달비 wei단위));
//data: contract.methods.storeAccept_Decline(수락,거절할 주문번호, true).encodeABI(),

import { useContext } from "react";
import { AppContext } from "../App";

function StoreAcceptDecline() {
  const { account, web3, contract, c_address, orderID } =
    useContext(AppContext);

  const onClickAccept = async () => {
    var a = web3.utils.numberToHex(Number(10000000000000));
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods
              .storeAccept_Decline(orderID, true)
              .encodeABI(),
            gas: "300000",
            value: a,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  const onClickDecline = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods
              .storeAccept_Decline(orderID, false)
              .encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickAccept}>수락하기</button>
      <button onClick={onClickDecline}>거절하기</button>
    </div>
  );
}
export default StoreAcceptDecline;
