import { BsPencil } from "react-icons/bs";
import orange from "../images/orange.png";

const MenuList = (props) => {
  return (
    <div className="font-agothic13 bg-white w-[350px] flex justify-between  items-center px-[10px] py-[15px] border-[2px] border-[#2D2D32] mt-4 rounded-lg">
      <div style={{ fontSize: "20px" }}>
        <div className="flex gap-2 items-center">
          <div>{props.menuName}</div>
          <div
            className="bg-deepYellow rounded-full px-[6px] py-[1px] text-white flex justify-center items-center"
            style={{ fontSize: "16px" }}
          >
            사장님 추천
          </div>
        </div>
        <div>{props.menuFrom}</div>
        <div>{props.menuPrice}원</div>
      </div>
      <div className="relative bg-darkGray rounded-[10px]  w-[80px] h-[80px]">
        <img src={orange} alt="" />
        <div className="absolute bg-deepYellow border-[2px] border-white rounded-[5px] p-[2px] bottom-[-10px] right-[-10px]">
          <BsPencil size={20} color="black" />
        </div>
      </div>
    </div>
  );
};
export default MenuList;
