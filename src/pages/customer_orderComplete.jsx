import { Link } from "react-router-dom";
import xletter from "../images/icon_xletter.png";

function OrderComplete() {
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] ">
        <div className="h-[44px]"></div>
        <Link to="/">
          <img
            src={xletter}
            alt="xletter"
            className="w-[24px] h-[24px] mt-[0px] ml-[24px]"
          />
        </Link>
        <div className="w-[350px] mt-[8px] ml-[20px] border-[0.5px] border-darkGray "></div>
        <div className="flex flex-col justify-start items-center">
          <div className=" w-[250px] h-[37px] mt-[33px] text-[32px] text-[#000000] font-bold text-center">
            주문 접수 완료!
          </div>
          <div className=" w-[264px] h-[60px] mt-[20px] text-[20px] text-center">
            라이더와 매장이 주문을 수락하면 차례대로 알려드릴게요!
          </div>
          <div className="w-[246] h-[21] mt-[8px] text-[14px] ">
            라이더와 매장의 사정으로 취소될 수 있어요.
          </div>
          <div className="w-[340px] h-[340px] mt-[40px] border-[1px] rounded-[20px]"></div>
          <button className=" bg-purple mt-[44px] btn-style text-lightGray ">
            주문 내역 보기
          </button>
          <div className="w-[200px] h-[24px] mt-[28px] text-purple text-[16px] text-center">
            다른 메뉴도 구경할래요!
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderComplete;
