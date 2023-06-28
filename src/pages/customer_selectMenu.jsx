import Header from "../components/Header";
import MenuOption from "../components/Customer_menuOption";
import TotalPrice from "../components/Customer_totalPrice"; //이름 다시 짓기

function SelectMenu() {
  return (
    <div className="bg-deepYellow min-h-screen flex justify-center items-center">
      <div className="bg-white w-[390px] overflow-y-auto h-[894px] ">
        <div className="relative">
          <img src="images/food.png" alt="food" className="absoulte z-10" />
          {/* <Header />
          <MenuOption />
          <TotalPrice /> */}
        </div>
      </div>
    </div>
  );
}

export default SelectMenu;
