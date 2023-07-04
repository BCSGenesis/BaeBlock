//고객 접수완료, 프로필
//가게 새로들어온주문, 현재진행중인주문
//라이더 deliveryList, delivery
//위에 해당하는 페이지의 컴포넌트에 아래와 같이 사용
import { useContext } from "react";
import { AppContext } from "../App";

function GetOrderState() {
  const { orderState } = useContext(AppContext);
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <div>orderState : {orderState}</div>
    </div>
  );
}

export default GetOrderState;
