import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import NftTitle from "../badges/nftTitle";

const StoreIntro = (props) => {
  return (
    <div className="  bg-white w-[320px] h-[140px]  flex-cols justify-center items-center p-[10px]  mt-2 shadow-md box-style">
      <div
        className="flex justify-center font-agothic16 mt-2 "
        style={{ fontSize: "20px" }}
      >
        {props.storeName}
      </div>
      <div className="flex justify-center items-center mt-2">
        {[...Array(parseInt(props.starCount))].map((_, i) => (
          <AiFillStar key={i} size={24} color="FFD84D" />
        ))}

        <AiOutlineRight size={20} color="7F7F82" />
      </div>
      <div className=" flex justify-center items-center gap-2 mt-4 ">
        {[...Array(parseInt(props.nftTitle.length))].map((v, i) => (
          <NftTitle
            title={props.nftTitle[i].name}
            key={i}
            size={24}
            color="FFD84D"
          />
        ))}
      </div>
    </div>
  );
};

export default StoreIntro;
