import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

import food from "../images/food.png";

import MenuList from "../components/menuList";
import CartIcon from "../components/cartIcon";
import BottomBar from "../components/bottomBar";
import StoreIntro from "../components/storeIntro";

export default function StoreViewCustomer() {
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

          <div className="flex-cols justify-start items-start absolute top-[200px]">
            <div
              className="flex justify-center items-center  bg-white w-[120px] rounded-full px-[6px] py-[1px] border-[1px] border-black font-agothic16"
              style={{ fontSize: "14px" }}
            >
              배달료 1,350원!
            </div>

            <StoreIntro
              storeName="도널드 트럼프의 점심식사!"
              nftTitle={nftTitle}
              starCount="3"
            />
          </div>

          <div className="mt-[150px]" style={{ fontSize: "20px" }}>
            <div className="font-agothic16">메뉴</div>

            <MenuList menuName="사과" menuFrom="한국" menuPrice="15000" />
            <MenuList menuName="복숭아" menuFrom="한국" menuPrice="12000" />
          </div>
        </div>
        <div className="sticky bottom-0  mt-[250px]">
          <CartIcon cartMenuCount="2" />
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
