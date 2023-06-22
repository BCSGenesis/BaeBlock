export default function App() {
  return (
    <div className="bg-pink-300 min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] h-[894px] flex flex-col justify-start items-center">
        <div className="border-[1px] mt-[44px] px-[6px] py-[3px]  rounded-[10px] border-[#2D2D32]">
          나의 닉네임
        </div>
        <div
          className="w-[340px] h-[156px] mt-[16px] flex justify-center font-bold"
          style={{ fontSize: "22px" }}
        >
          사장님!
          <br />
          이번달 매출은 1조 8천억 입니다!
          <br />
          <br />
          오늘도 잘 먹겠습니다!
        </div>
        <div className="w-[340px] flex justify-between  items-center mt-8 gap-2">
          <div className=" flex justify-start items-center mt-8 gap-2">
            <div
              className="bg-[#AA3FFF] rounded-full px-[6px] py-[1px] text-[#FAFAF2]"
              style={{ fontSize: "14px" }}
            >
              멕시칸
            </div>
            <div
              className="bg-[#AA3FFF] rounded-full px-[6px] py-[1px] text-[#FAFAF2]"
              style={{ fontSize: "14px" }}
            >
              리뷰 최다
            </div>
            <div
              className="bg-[#AA3FFF] rounded-full px-[6px] py-[1px] text-[#FAFAF2]"
              style={{ fontSize: "14px" }}
            >
              친절한 사장님
            </div>
          </div>
          <div className="w-[70px] h-[70px] bg-[#B2B2C1] text-[#FAFAF2] flex justify-center items-center rounded-full border-[1px] shadow-md ">
            영업
            <br />
            안함
          </div>
        </div>
        <div
          className="w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
          style={{ fontSize: "20px" }}
        >
          새로운 주문이 들어왔어요!
        </div>
        <div
          className="w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
          style={{ fontSize: "20px" }}
        >
          현재 수락한 주문 리스트
        </div>
        <div className="w-[340px] flex justify-between items-center">
          <div
            className="w-[160px] h-[160px] bg-[#FAFAF2] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
            style={{ fontSize: "20px" }}
          >
            매출
            <br />
            보기
          </div>
          <div
            className="w-[160px] h-[160px] bg-[#FFC805] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
            style={{ fontSize: "20px" }}
          >
            메뉴
            <br />
            수정
          </div>
        </div>
        <div
          className="w-[340px] h-[140px] flex justify-start items-start p-[10px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
          style={{ fontSize: "20px" }}
        >
          NFT 마켓
        </div>
      </div>
    </div>
  );
}
