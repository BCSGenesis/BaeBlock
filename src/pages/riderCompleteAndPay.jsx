//data: contract.methods.orderComplete(배달완료후 돈 뿜빠이 할 주문번호, true).encodeABI(),
//배달완료버튼누를때 같이 실행??

import { useContext } from "react";
import { AppContext } from "../App";

function RiderCompleteAndPay() {
  const { account, contract, c_address, orderID } = useContext(AppContext);

  const onClickRiderCompleteAndPay = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.orderComplete(orderID, true).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickRiderCompleteAndPay}>배달완료후돈지불</button>
    </div>
  );
}
export default RiderCompleteAndPay;
