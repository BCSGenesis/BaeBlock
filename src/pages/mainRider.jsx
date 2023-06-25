import nftShop from "../images/nftShop.png";

export default function MainRider() {
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
            라이더님!
            <br />
            어제 000번 배달했어요!
            <br />
            <br />
            오늘도 안전운전하세요!
          </div>
          <div className="w-[340px] flex justify-between  items-center mt-8 gap-2">
            <div className=" flex justify-start items-center mt-8 gap-2">
              <div className="nft-style" style={{ fontSize: "14px" }}>
                멕시칸
              </div>
              <div className="nft-style" style={{ fontSize: "14px" }}>
                리뷰 최다
              </div>
              <div className="nft-style" style={{ fontSize: "14px" }}>
                친절한 사장님
              </div>
            </div>
            <div
              className="font-agothic13 w-[70px] h-[70px] bg-mint text-[#FAFAF2] flex justify-center items-center rounded-full border-[1px] shadow-md "
              style={{ fontSize: "20px" }}
            >
              배달중
            </div>
          </div>
          <div
            className="font-agothic13 bg-lightGray w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
            style={{ fontSize: "20px" }}
          >
            새로운 배달을 시작해요!
          </div>

          <div className="w-[340px] flex justify-between items-center">
            <div
              className="font-agothic13 w-[160px] h-[160px] bg-[#FAFAF2] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
              style={{ fontSize: "20px" }}
            >
              오늘의
              <br />
              수익
            </div>
            <div
              className="font-agothic13 w-[160px] h-[160px] bg-[#FFC805] p-2 mt-4 font-bold border-2 border-[#2D2D32] rounded-[10px]"
              style={{ fontSize: "20px" }}
            >
              나의
              <br />
              프로필
            </div>
          </div>
          <div
            className="relative nftMarket-style  w-[340px] h-[160px] flex justify-start items-start p-[10px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
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
