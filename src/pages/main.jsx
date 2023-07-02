import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <Link to="/register">
        <button>회원가입</button>
      </Link>
      <Link to="/customerOrder">
        <button>고객음식주문</button>
      </Link>
      <Link to="/storeAcceptDecline">
        <button>가게주문 수락 거절</button>
      </Link>
      <Link to="/storeCookFinish">
        <button>가게음식조리완료</button>
      </Link>
      <Link to="/riderPick">
        <button>배달원지정</button>
      </Link>
      <Link to="/riderStart">
        <button>배달시작</button>
      </Link>
      <Link to="/riderComplete">
        <button>배달완료</button>
      </Link>
      <Link to="/riderCompleteAndPay">
        <button>배달완료후돈지불</button>
      </Link>
    </div>
  );
}
export default Main;
