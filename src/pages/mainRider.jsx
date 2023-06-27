import { useState } from "react";
import NftTitle from "../badges/nftTitle";

import MyProfile from "../components/myProfile";
import TodayMoney from "../components/todayMoney";
import NftMarket from "../components/nftMarket";
import GoDelivery from "../components/goDelivery";
import InDelivery from "../badges/inDelivery";

export default function MainRider() {
  const [nickName, setNickName] = useState("나의 닉네임"); //로그인에서 프롭스로 내려야할것같음
  const [deliveryCount, setDeliveryCount] = useState(0); //로그인에서 프롭스로 내려야할것같음

  const nftTitle = [
    { title: "멕시칸" },
    { title: "리뷰 최다" },
    { title: "친절한 사장님" },
  ]; //로그인에서 프롭스로 내려야할것같음

  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] ">
        <div className="flex flex-col justify-start items-center">
          <div className="border-[1px] mt-[44px] px-[6px] py-[3px]  rounded-[10px] border-[#2D2D32]">
            {nickName}
          </div>
          <div
            className="font-agothic13 w-[340px] h-[156px] mt-[16px] flex justify-start font-bold"
            style={{ fontSize: "22px" }}
          >
            {nickName} 라이더님!
            <br />
            어제 {deliveryCount}번 배달했어요!
            <br />
            <br />
            오늘도 안전운전하세요!
          </div>
          <div className="w-[340px] flex justify-between  items-center mt-8 gap-2">
            <div className=" flex justify-start items-center mt-8 gap-2">
              {nftTitle.map((v, i) => (
                <NftTitle
                  title={nftTitle[i].title}
                  key={i}
                  size={24}
                  color="FFD84D"
                />
              ))}
            </div>
            <InDelivery />
          </div>
          <GoDelivery />

          <div className="w-[340px] flex justify-between items-center">
            <TodayMoney />
            <MyProfile />
          </div>
          <NftMarket />
        </div>
      </div>
    </div>
  );
}
