import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import StoreMain from "./pages/store_main";
import StoreMenu from "./pages/store_menu";
import { StoreNewList } from "./pages/store_newList";
import { StoreMyList } from "./pages/store_myList";
import RiderMain from "./pages/rider_main";
import { RiderNewList } from "./pages/rider_newList";
import { RiderDeliveryStatus } from "./pages/rider_deliveryStatus";
import CustomerViewMenu from "./pages/customer_viewMenu";
import Main from "./pages/main";
import OrderComplete from "./pages/customer_orderComplete";
import Profile from "./pages/customer_profile";
import MenuEdit from "./pages/store_menuEdit";
import SelectMenu from "./pages/customer_selectMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white border-2 rounded-2xl border-black w-screen max-w-screen-md max-h-[844px] h-screen mx-auto overflow-y-auto text-black">
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/customer/viewmenu" element={<CustomerViewMenu />} />
            <Route path="/customer/orderComplete" element={<OrderComplete />} />
            <Route path="/customer/profile" element={<Profile />} />
            <Route path="/customer/menuEdit" element={<MenuEdit />} />

            <Route path='/store' element={<StoreMain />} />
            <Route path='/store/newlist' element={<StoreNewList />} />
            <Route path='/store/mylist' element={<StoreMyList />} />
            <Route path='/store/menu-edit' element={<StoreMenu />} />
            <Route path="/store/selectMenu" element={<SelectMenu />} />

            <Route path='/rider' element={<RiderMain />} />
            <Route path='/rider/delivery' element={<RiderDeliveryStatus />} />
            <Route path='/rider/newlist' element={<RiderNewList />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
