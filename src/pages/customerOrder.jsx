//장바구니페이지의 결제하기버튼(아직 UI디자인 없음)
//var a = web3.utils.numberToHex(Number(wei단위로 음식값+배달비+배달팁));
//.ordering("가게wallet", 음식값wei,배달비wei,배달팁wei)

import { useContext } from "react";
import { AppContext } from "../App";

function CustomerOrder() {
  const { account, web3, contract, c_address, orderID, setOrderID } =
    useContext(AppContext);

  const onClickOrder = async () => {
    var a = web3.utils.numberToHex(Number(50000000000000));
    try {
      const response = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods
              .ordering(
                "0x672BB79Dc88a32a1c86554d7D86d47F8AEf47514",
                40000000000000,
                10000000000000,
                0
              )
              .encodeABI(),
            gas: "300000",
            value: a,
          },
        ],
      });
      console.log(response); //orderID 컨트랙트로 부터 가지고와야함
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickOrder}>주문하기</button>
      <div>{orderID}</div>
    </div>
  );
}
export default CustomerOrder;
