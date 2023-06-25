import NftTitle from "../components/nftTitle";
import nftShop from "../images/nftShop.png";

export default function MainStore() {
  const nftTitle = [
    { name: "멕시칸" },
    { name: "리뷰 최다" },
    { name: "친절한 사장님" },
  ];
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] ">
        <div className="flex flex-col justify-start items-center">
          <div className="border-[1px] mt-[44px] px-[6px] py-[3px]  rounded-[10px] border-[#2D2D32]">
            나의 닉네임
          </div>
          <div
            className="font-agothic13 w-[340px] h-[156px] mt-[16px] flex justify-start font-bold"
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
              {[...Array(parseInt(nftTitle.length))].map((v, i) => (
                <NftTitle
                  title={nftTitle[i].name}
                  key={i}
                  size={24}
                  color="FFD84D"
                />
              ))}
            </div>
            <div
              className="w-[70px] h-[70px] bg-gray font-agothic16 text-[#FAFAF2] flex justify-center items-center rounded-full border-[1px] shadow-md "
              style={{ fontSize: "18px" }}
            >
              영업
              <br />
              안함
            </div>
          </div>
          <div
            className="font-agothic13 bg-lightGray w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
            style={{ fontSize: "20px" }}
          >
            새로운 주문이 들어왔어요!
          </div>
          <div
            className="font-agothic13 bg-lightGray w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
            style={{ fontSize: "20px" }}
          >
            현재 수락한 주문 리스트
          </div>
          <div className="w-[340px] flex justify-between items-center">
            <div
              className="font-agothic13 w-[160px] h-[160px] bg-[#FAFAF2] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
              style={{ fontSize: "20px" }}
            >
              매출
              <br />
              보기
            </div>
            <div
              className="font-agothic13 w-[160px] h-[160px] bg-[#FFC805] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
              style={{ fontSize: "20px" }}
            >
              메뉴
              <br />
              수정
            </div>
          </div>
          <div
            className="relative nftMarket-style  w-[340px] h-[160px] flex justify-start items-start p-[10px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg mb-8"
            style={{ fontSize: "20px" }}
          >
            NFT 마켓
            <img
              className="w-[160px] absolute right-0"
              src={nftShop}
              alt="nftMarket"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
