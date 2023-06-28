import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <Link to="/rider/mainRider">
        <button>mainRider</button>
      </Link>
      <Link to="/store/mainStore">
        <button>mainStore</button>
      </Link>
      <Link to="/customer/storeViewCustomer">
        <button>storeViewCustomer</button>
      </Link>
      <Link to="/store/menuStore">
        <button>menuStore</button>
      </Link>
    </div>
  );
}
export default Main;
