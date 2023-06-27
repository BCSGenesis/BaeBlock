import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

import food from "../images/food.png";

import MenuList from "../components/menuList";
import CartIcon from "../components/cartIcon";
import BottomBar from "../components/bottomBar";
import StoreIntro from "../components/storeIntro";
import { useState } from "react";

export default function StoreViewCustomer() {
  const [deliveryFee, setDeliveryFee] = useState(1000);
  const [cartCount, setCartCount] = useState(0); //로그인시 프롭스로 내려줘야함??

  const nftTitle = [{ name: "qwe" }, { name: "Asd" }];
  const menuList = [
    {
      menuName: "사과",
      menuFrom: "국내산",
      menuPrice: "12000",
      menuImage: "../images/orange.png",
    },
    {
      menuName: "복숭이",
      menuFrom: "캐나다산",
      menuPrice: "17000",
      menuImage: "../images/orange.png",
    },
  ];
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
              배달료 {deliveryFee}원!
            </div>

            <StoreIntro
              storeName="도널드 트럼프의 점심식사!"
              nftTitle={nftTitle}
              starCount="3"
            />
          </div>

          <div className="mt-[150px]" style={{ fontSize: "20px" }}>
            <div className="font-agothic16">메뉴</div>
            {menuList.map((v, i) => (
              <MenuList
                key={i}
                menuName={menuList[i].menuName}
                menuFrom={menuList[i].menuFrom}
                menuPrice={menuList[i].menuPrice}
                menuImage={menuList[i].menuImage}
              />
            ))}
          </div>
        </div>
        <div className="sticky bottom-0  mt-[250px]">
          <CartIcon cartMenuCount={cartCount} />
          <BottomBar />
        </div>
      </div>
    </div>
  );
}
