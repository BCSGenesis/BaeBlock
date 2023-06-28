import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import MainRider from "./pages/mainRider";
import MainStore from "./pages/mainStore";
import StoreViewCustomer from "./pages/storeViewCustomer";
import MenuStore from "./pages/menuStore";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-deepYellow min-h-screen flex justify-center items-center">
        <div className="bg-white w-[390px] overflow-y-auto h-[894px] relative">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/rider/mainRider" element={<MainRider />} />
            <Route path="/store/mainStore" element={<MainStore />} />
            <Route
              path="/customer/storeViewCustomer"
              element={<StoreViewCustomer />}
            />
            <Route path="/store/menuStore" element={<MenuStore />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
