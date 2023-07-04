//라이더 나의 프로필에서 내가 선택한 배달 목록들 나열되고,각 목록에 배달 시작,배달완료버튼
//data: contract.methods.startDelivery(배달시작할 주문번호).encodeABI(),

import { useContext } from "react";
import { AppContext } from "../App";

function RiderStart() {
  const { account, contract, c_address, orderID } = useContext(AppContext);

  const onClickStartDelivery = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.startDelivery(orderID).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickStartDelivery}>배달시작</button>
    </div>
  );
}
export default RiderStart;
