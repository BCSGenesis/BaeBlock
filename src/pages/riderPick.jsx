//라이더배달리스트에서 각 배달목록컴포넌트에 배달선택버튼 추가해서 해당 버튼에 적용
//data: contract.methods.setDelivery(배달선택할 주문번호).encodeABI(),
import { useContext } from "react";
import { AppContext } from "../App";

function RiderPick() {
  const { account, contract, c_address, orderID } = useContext(AppContext);

  const onClickSetDelivery = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.setDelivery(orderID).encodeABI(),
            gas: "300000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickSetDelivery}>라이더선택</button>
    </div>
  );
}
export default RiderPick;
