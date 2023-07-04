<<<<<<< HEAD
import back from "../images/icon_ArrowBack.png";
import home from "../images/icon_home_.png";

import food from "../images/food.png";

import MenuList from "../components/menuList";
import CartIcon from "../components/cartIcon";
import BottomBar from "../components/Customer_BottomNav";
import StoreIntro from "../components/Store_Intro";
import { useState } from "react";
=======
import food from '../images/food.png';

import MenuList from '../components/MenuList';
import CartIcon from '../components/CartIcon';
import BottomBar from '../components/Customer_BottomNav';
import StoreIntro from '../components/Store_Intro';
import { useState } from 'react';
import { DeliveryFeeChip } from '../components/DeliveryFeeChip';
import { Link } from 'react-router-dom';
>>>>>>> upstream/SH_SO_frontend

export default function CustomerViewMenu() {
  const [deliveryFee, setDeliveryFee] = useState(1000);
  const [cartCount, setCartCount] = useState(0); //로그인시 프롭스로 내려줘야함??

  const nftTitle = [{ name: "사장님" }, { name: "잘 되는지 확인" }]; //로그인시 프롭스로 내려줘야함??
  const menuList = [
    {
      menuName: "사과",
      menuFrom: "국내산",
      menuPrice: "12000",
      menuImage: "../images/orange.png",
      ownerRecommend: true,
    },
    {
      menuName: "복숭아",
      menuFrom: "캐나다산",
      menuPrice: "17000",
      menuImage: "../images/orange.png",
      ownerRecommend: false,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
  ]; //로그인시 프롭스로 내려줘야함??
<<<<<<< HEAD
  return (
    <>
      <div className="flex flex-col justify-start items-center relative">
        <div className="min-w-full bg-pink-100 h-[250px] relative">
          {/* <div className='absolute top-11 flex justify-between items-center min-w-full px-6'>
            <img src={back} alt='back' />
            <img src={home} alt='home' />
          </div> */}
          <img className="w-full h-full object-cover" src={food} alt="food" />
        </div>

        <div className="flex flex-col justify-center items-center absolute top-[180px]">
          <div className="flex flex-col">
            <div className="w-32 flex justify-center items-center bg-white px-2 py-[1px] rounded-xl border-2 border-[#FE4141] red-shadow mb-2 text-body">
              배달료<span className="font-bold">{deliveryFee}원!</span>
            </div>
            <StoreIntro
              storeName="도널드 트럼프의 점심"
              nftTitle={nftTitle}
              starCount="5"
            />
          </div>
          <div className="mt-4">
            <div className="text-subtitle font-bold mb-2">메뉴</div>
            <div className="flex flex-col gap-4">
              {menuList.map((v, i) => (
                <MenuList
                  key={i}
                  menuName={menuList[i].menuName}
                  menuFrom={menuList[i].menuFrom}
                  menuPrice={menuList[i].menuPrice}
                  menuImage={menuList[i].menuImage}
                  ownerRecommend={menuList[i].ownerRecommend}
                />
              ))}
            </div>
          </div>
          <div className="sticky bottom-0 mt-[500px]">
            <CartIcon cartMenuCount={cartCount} />
            <BottomBar />
=======

  return (
    <div className='flex flex-col justify-start items-center z-20'>
      <div className='min-w-full h-[250px]'>
        <img className='w-full h-full object-cover' src={food} alt='food' />

        <div className='relative'>
          <div className='absolute left-8 -top-24 flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
              <DeliveryFeeChip deliveryFee={deliveryFee} />
              <StoreIntro storeName='도널드 트럼프의 점심' nftTitle={nftTitle} starCount='5' />
            </div>
>>>>>>> upstream/SH_SO_frontend
          </div>
        </div>
      </div>

      <div className='mt-28'>
        <div className='text-subtitle font-bold text-left mb-2 ml-1'>메뉴</div>
        <div className='flex flex-col gap-4 mb-8'>
          {menuList.map((v, i) => (
            <Link to='/customer/selectmenu'>
              <MenuList
                key={i}
                menuName={menuList[i].menuName}
                menuFrom={menuList[i].menuFrom}
                menuPrice={menuList[i].menuPrice}
                menuImage={menuList[i].menuImage}
                ownerRecommend={menuList[i].ownerRecommend}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='sticky bottom-0'>
        <div className='absolute right-2 bottom-16'>
          <CartIcon cartMenuCount={cartCount} />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}
