import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="h-full flex flex-col  justify-center items-center">
      <Link to="/" className="font-bold">
        <button>Customer</button>
      </Link>

      <Link to="/customer/viewmenu">viewmenu</Link>
      <Link to="/customer/orderComplete">orderComplete</Link>
      <Link to="/customer/profile">profile</Link>
      <Link to="/customer/menuEdit">menuEdit</Link>

      <Link to="/" className="font-bold">
        <button>Store</button>
      </Link>

      <Link to="/store/main">main</Link>
      <Link to="/store/newlist">newlist</Link>
      <Link to="/store/mylist">mylist</Link>
      <Link to="/store/menu">menu</Link>
      <Link to="/store/selectMenu">selectMenu</Link>

      <Link to="/" className="font-bold">
        <button>Rider</button>
      </Link>

      <Link to="/rider/main">main</Link>
      <Link to="/rider/delivery">delivery</Link>
      <Link to="/rider/newlist">newlist</Link>
    </div>
  );
}
export default Main;
