//고객 접수완료, 프로필
//가게 새로들어온주문, 현재진행중인주문
//라이더 deliveryList, delivery
//위에 해당하는 페이지의 컴포넌트에 아래와 같이 사용
import { useContext } from "react";
import { AppContext } from "../App";

function GetOrderState() {
  const { orderState, contract } = useContext(AppContext);
  const onClickA = async () => {
    try {
      const response = await contract.methods.returnRegister().call();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <div>orderState : {orderState}</div>
      <button onClick={onClickA}>등록번호</button> //오류 수정중
    </div>
  );
}

export default GetOrderState;
