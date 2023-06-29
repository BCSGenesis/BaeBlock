import star from "../images/icon_star.png";

const RecentOrder = (props) => {
  return (
    <div className="shrink-0  bg-white w-[253px] h-[100px] flex justify-between  items-center  p-[10px] ml-6  mr-4 shadow-md rounded-lg border-[2px] border-[#2D2D32]">
      <div className="flex flex-col justify-start items-start">
        <div
          className="flex justify-center font-agothic16   border-b-[1px] border-purple"
          style={{ fontSize: "16px" }}
        >
          {props.storeName}
        </div>
        <div className="flex justify-center items-center mt-2">
          {[...Array(parseInt(props.starCount))].map((_, i) => (
            // <AiFillStar key={i} size={24} color="FFD84D" />
            <img src={star} alt="star" width={20} />
          ))}
        </div>
        <div
          className="flex justify-center font-agothic13 mt-2 text-darkGray "
          style={{ fontSize: "14px" }}
        >
          {props.menuName}
        </div>
      </div>
      <div className="w-[80px] h-[80px] bg-red-100">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default RecentOrder;
