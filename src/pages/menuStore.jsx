import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

import { AiOutlinePlusSquare } from "react-icons/ai";
import food from "../images/food.png";

import MenuList from "../components/menuList";
import StoreIntroEdit from "../components/storeIntroEdit";

export default function MenuStore() {
  const nftTitle = [{ name: "qwe" }, { name: "Asd" }];
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] relative">
        <div className="flex flex-col justify-start items-center relative">
          <div className="min-w-full bg-pink-100 h-[250px] relative">
            <button className="absolute top-[44px] left-[24px]">
              <IoIosArrowBack size={24} />
            </button>
            <button className="absolute top-[44px] left-[342px]">
              <AiOutlineHome size={24} />
            </button>
            <img src={food} alt="food" />
          </div>

          <div className="absolute top-[200px]">
            <StoreIntroEdit starCount="3" nftTitle={nftTitle} />
          </div>

          <div className="mt-[130px]" style={{ fontSize: "20px" }}>
            <div className="font-agothic16">메뉴</div>
            <MenuList menuName="사과" menuFrom="한국" menuPrice="15000" />

            <div
              className="sticky  bottom-4 bg-white mb-4 font-agothic16 w-[350px]  flex justify-center items-center py-[20px] border-[2px] border-[#2D2D32] mt-4 rounded-lg"
              style={{ fontSize: "24px" }}
            >
              메뉴 추가
              <AiOutlinePlusSquare className="ml-2" size={24} color="purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
