import Header from "../components/Header";
function MenuEdit() {
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className=" w-[390px] overflow-y-auto h-[894px] bg-[#FFFFFF]">
        <Header />
        <div className="absolute w-[176px] h-[30px] mt-[145px] ml-[38px] text-[26px] font-bold text-black">
          메뉴를 추가해요!
        </div>
        <div className="absolute w-[66px] h-[21px] mt-[222px] ml-[38px] text-[14px] text-gray">
          대표 이미지
        </div>
        <img
          src="../src/images/orange.png"
          alt="orange"
          className="absolute w-[112px] h-[112px] mt-[251px] ml-[38px] bg-[#D9D9D9]"
        />

        <div className="absolute w-[314px] h-[59px] mt-[383px] ml-[38px]">
          <div className="w-[54px] h-[21px] opacity-40 text-[14px] font-bold  text-darkGray">
            메뉴 이름
          </div>
          <input
            type="text"
            className="w-[314px] h-[24px] mt-[9px] text-[16px] font-bold text-black border-b-[0.5px] border-black"
          />
        </div>

        <div className="absolute w-[314px] h-[59px] mt-[462px] ml-[38px]">
          <div className=" w-[83px] h-[21px] opacity-40 text-[14px] font-bold  text-darkGray">
            메뉴 상세 설명
          </div>
          <input
            type="text"
            className="w-[314px] h-[24px] mt-[9px] text-[16px] font-bold text-black border-b-[0.5px] border-black"
          />
        </div>

        <div className="absolute w-[314px] h-[59px] mt-[541px] ml-[38px]">
          <div className=" w-[25px] h-[21px] opacity-40 text-[14px] font-bold  text-darkGray">
            가격
          </div>
          <input
            type="text"
            className="w-[314px] h-[24px] mt-[9px] text-[16px] font-bold text-black border-b-[0.5px] border-black"
          />
        </div>

        <button className="absolute bg-lightYellow mt-[672px] ml-[57px] btn-style">
          저장
        </button>
      </div>
    </div>
  );
}

export default MenuEdit;
