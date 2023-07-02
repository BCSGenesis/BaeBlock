//라이더 나의 프로필에서 내가 선택한 배달 목록들 나열되고,각 목록에 배달 시작,배달완료버튼
//data: contract.methods.doneDelivery(배달완료할주문번호).encodeABI(),

import { useContext } from "react";
import { AppContext } from "../App";

function RiderComplete() {
  const { account, web3, contract, c_address, test_c_address } =
    useContext(AppContext);

  const onClickDoneDelivery = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: test_c_address,
            data: contract.methods.doneDelivery(1).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickDoneDelivery}>배달완료</button>
    </div>
  );
}
export default RiderComplete;
