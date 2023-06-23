import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import MainRider from "./pages/mainRider";
import MainStore from "./pages/mainStore";
import MenuEditStore from "./pages/menuEditStore";
import MenuStore from "./pages/menuStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainRider" element={<MainRider />} />
        <Route path="/mainStore" element={<MainStore />} />
        <Route path="/menuEdit" element={<MenuEditStore />} />
        <Route path="/menuStore" element={<MenuStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
