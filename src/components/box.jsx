const Box = (props) => {
  return (
    <div
      className={`font-agothic13 w-[160px] h-[160px] ${props.color} p-2 mt-4 font-bold box-style`}
      style={{ fontSize: "20px" }}
    >
      {props.text1}
      <br />
      {props.text2}
    </div>
  );
};

export default Box;
