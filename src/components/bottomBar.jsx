import like from "../images/like.png";
import list from "../images/list.png";
import rocket from "../images/rocket.png";
import shop from "../images/shop.png";
import user from "../images/user.png";

const BottomBar = () => {
  return (
    <div className=" min-w-full">
      <div className=" bg-white bar_shadow  rounded-tl-[5px] rounded-tr-[5px] w-[390px] h-[60px] flex justify-evenly  items-center ">
        <img className="w-[40px]" src={shop} alt="shop" />
        <img className="w-[40px]" src={list} alt="list" />
        <img className="w-[40px]" src={rocket} alt="rocket" />
        <img className="w-[40px]" src={like} alt="like" />
        <img className="w-[40px]" src={user} alt="user" />
      </div>
    </div>
  );
};

export default BottomBar;
