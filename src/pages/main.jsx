import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="bg-blue-300 min-h-screen min-w-full flex flex-col justify-center items-center">
      <Link to="/mainRider">
        <button>mainRider</button>
      </Link>
      <Link to="/mainStore">
        <button>mainStore</button>
      </Link>
      <Link to="/menuEdit">
        <button>menuEdit</button>
      </Link>
      <Link to="/menuStore">
        <button>menuStore</button>
      </Link>
    </div>
  );
}
export default Main;
