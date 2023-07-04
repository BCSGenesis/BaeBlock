//현재진행중인 주문목록에 조리완료버튼 추가해서 조리완료버튼에 적용
//data: contract.methods.cookFinish(조리완료선택할 주문번호).encodeABI()

import { useContext } from "react";
import { AppContext } from "../App";

function StoreCookFinish() {
  const { account, contract, c_address, orderID } = useContext(AppContext);

  const onClickCookFinish = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.cookFinish(orderID).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickCookFinish}>음식완료</button>
    </div>
  );
}
export default StoreCookFinish;
