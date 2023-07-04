// 각 회원가입 페이지로 들어가서 닉네임,기타정보 입력하고 하단의 위치한 회원등록버튼에 적용
// (주문하러가기,메뉴등록하러가기,배달하러가기 버튼),추가로 고객은 함수실행 없음

import { useContext } from "react";
import { AppContext } from "../App";

function Register() {
  const { account, contract, c_address, orderID } = useContext(AppContext);

  const onClickStore = async () => {
    try {
      // var tx = {
      //   from: account,
      //   to: c_address,
      //   gas: 300000,
      //   gasPrice: 3000000,
      //   data: contract.methods.Register(0).encodeABI(),
      // };
      // var signPromise = web3.eth.accounts.signTransaction(
      //   tx,
      //   "0xaed6bb4c43bd3f18f605385a7db745a085657b850d034fb1b5aa9a6dda81f222"
      // );
      // signPromise.then((signedTx) => {
      //   var sentTx = web3.eth.sendSignedTransaction(
      //     signedTx.raw || signedTx.rawTransaction
      //   );
      //   sentTx.on("receipt", (receipt) => {
      //     console.log(receipt);
      //   });
      // });

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.Register(1).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  const onClickRider = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: c_address,
            data: contract.methods.Register(2).encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <button onClick={onClickStore}>스토어 회원가입</button>
      <button onClick={onClickRider}>라이더 회원가입</button>
      <button>고객 회원가입</button>
    </div>
  );
}
export default Register;
