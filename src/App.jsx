// 배불럭 회원가입/로그인 페이지에서 회원가입버튼1개가 3가지(가게,라이더,고객)로 나누어지고,
// 회원가입버튼 누르면 메타마스크 연동

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Register from "./pages/register";
import CustomerOrder from "./pages/customerOrder";
import StoreAcceptDecline from "./pages/storeAcceptDecline";
import StoreCookFinish from "./pages/storeCookFinish";
import RiderPick from "./pages/riderPick";
import RiderStart from "./pages/riderStart";
import RiderComplete from "./pages/riderComplete";
import { createContext, useState } from "react";
import Web3 from "web3";
import C_ABI from "./lib/c_abi.json";
import TEST_C_ABI from "./lib/test_c_abi.json";
import RiderCompleteAndPay from "./pages/riderCompleteAndPay";
export const AppContext = createContext();

function App() {
  const [account, setAccount] = useState();

  var web3 = new Web3(
    "https://goerli.infura.io/v3/d8af4ef009f8433695244e633d6e5106"
  );
  var c_address = "0x77ed7714d48280796df645cab97c5cee7822794a";
  var test_c_address = "0xFB4DD738Bb304870dDfd0f79d3F65D663C04b685";
  var c_abi = C_ABI;
  var test_c_abi = TEST_C_ABI;
  var contract = new web3.eth.Contract(test_c_abi, test_c_address);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);

      alert("계정 정보를 불러오는데 실패하였습니다.");
    }
  };
  return (
    <BrowserRouter>
      <div className="bg-red-100 min-h-screen min-w-full flex flex-col justify-center items-center">
        <div className="min-w-full h-20 bg-red-100 flex justify-center items-center">
          {account ? (
            <div>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          ) : (
            <button className="bg-green-100" onClick={onClickAccount}>
              connect
            </button>
          )}
        </div>
        <AppContext.Provider
          value={{ account, web3, contract, c_address, test_c_address }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/customerOrder" element={<CustomerOrder />} />
            <Route
              path="/storeAcceptDecline"
              element={<StoreAcceptDecline />}
            />
            <Route path="/storeCookFinish" element={<StoreCookFinish />} />
            <Route path="/riderPick" element={<RiderPick />} />
            <Route path="/riderStart" element={<RiderStart />} />
            <Route path="/riderComplete" element={<RiderComplete />} />
            <Route
              path="/riderCompleteAndPay"
              element={<RiderCompleteAndPay />}
            />
          </Routes>
        </AppContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
