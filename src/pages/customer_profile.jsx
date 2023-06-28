import BottomBar from "../components/bottomBar";
function Profile() {
  return (
    <>
      <div className="bg-deepYellow min-h-screen flex justify-center items-center">
        <div className="bg-white w-[390px] overflow-y-auto h-[894px]">
          <div className="flex">
            <div className="flex-col mt-[75px] ml-[22px]">
              <img
                src="/images/profile.png"
                alt="profile"
                className="w-[100px] h-[100px] rounded-full"
              />
              <div className="w-[100px] text-center text-black text-[20px]">
                닉네임
              </div>
            </div>
            <div className="mt-[92px] ml-[27px]">
              <div className="flex items-center">
                <img
                  src="/images/icon_wallet.png"
                  alt="wallet"
                  className="w-[24px] h-[24px] mr-[11px]"
                />
                <div className="text-[14px]">지갑주소</div>
              </div>
              <div className="flex items-center">
                <img
                  src="/images/icon_coins.png"
                  alt="wallet"
                  className="w-[24px] h-[24px] mr-[11px]"
                />
                <div className="text-[14px]">지갑잔고</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-32">
            <BottomBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
