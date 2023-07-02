//장바구니페이지의 결제하기버튼(아직 UI디자인 없음)
//var a = web3.utils.numberToHex(Number(wei단위로 음식값+배달비+배달팁));
//.ordering("가게wallet", 음식값wei,배달비wei,배달팁wei)

import { useContext } from "react";
import { AppContext } from "../App";

function CustomerOrder() {
  const { account, web3, contract, c_address, test_c_address } =
    useContext(AppContext);

  const onClickOrder = async () => {
    var a = web3.utils.numberToHex(Number(3000000000000000));
    try {
      await window.ethereum.request(
        {
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: test_c_address,
              data: contract.methods
                .ordering("0x74913ee32a84941a71774439e0a3b581bef378ca", 2, 1, 0)
                .encodeABI(),
              gas: "300000",
              value: a,
            },
          ],
        }
        // {
        //   method: "eth_sendTransaction",
        //   params: [{ from: account, to: test_c_address, value: 0.002 }],
        // }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickOrder}>주문하기</button>
    </div>
  );
}
export default CustomerOrder;
