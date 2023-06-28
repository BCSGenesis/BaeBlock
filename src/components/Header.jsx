import icon_ArrowBack from "../images/icon_ArrowBack.png";
import icon_home from "../images/icon_home_.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[24px] h-[24px] ml-[24px]">
        <Link to="/">
          <img
            src={icon_ArrowBack}
            alt="ArrowBack"
            className="absolute mt-[44px]"
          />
        </Link>
      </div>
      <div className="w-[24px] h-[24px] mr-[24px]">
        <Link to="/">
          <img src={icon_home} alt="Home" className="absolute mt-[44px]" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
