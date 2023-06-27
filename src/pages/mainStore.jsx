import { useState } from "react";
import Badge from "../badges/badge";
import NftTitle from "../badges/nftTitle";
import Box from "../components/box";
import LongBox from "../components/longBox";
import NftMarket from "../components/nftMarket";

export default function MainStore() {
  const [nickName, setNickName] = useState("나의 닉네임"); //로그인에서 프롭스로 내려야할것같음
  const [monthMoney, setMonthMoney] = useState(0); //로그인에서 프롭스로 내려야할것같음

  const nftTitle = [
    { name: "멕시칸" },
    { name: "리뷰 최다" },
    { name: "친절한 사장님" },
  ];
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] ">
        <div className="flex flex-col justify-start items-center mb-8">
          <div className="border-[1px] mt-[44px] px-[6px] py-[3px]  rounded-[10px] border-[#2D2D32]">
            {nickName}
          </div>
          <div
            className="font-agothic13 w-[340px] h-[156px] mt-[16px] flex justify-start font-bold"
            style={{ fontSize: "22px" }}
          >
            {nickName} 사장님!
            <br />
            이번달 매출은 {monthMoney}원 입니다!
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
            <Badge text1="영업" text2="안함" color="gray" />
          </div>
          <LongBox text="새로운 주문이 들어왔어요!" />
          <LongBox text="현재 수락한 주문 리스트" />

          <div className="w-[340px] flex justify-between items-center">
            <Box text1="매출" text2="보기" color="white" />
            <Box text1="메뉴" text2="수정" color="deepYellow" />
          </div>

          <NftMarket />
        </div>
      </div>
    </div>
  );
}
