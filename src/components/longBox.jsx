const LongBox = (props) => {
  return (
    <div
      className="font-agothic13 bg-lightGray w-[340px] flex justify-center items-center px-[10px] py-[25px] font-bold border-[2px] border-[#2D2D32] mt-4 rounded-lg"
      style={{ fontSize: "20px" }}
    >
      {props.text}
    </div>
  );
};

export default LongBox;
