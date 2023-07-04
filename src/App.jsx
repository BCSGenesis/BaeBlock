// 배불럭 회원가입/로그인 페이지에서 회원가입버튼1개가 3가지(가게,라이더,고객)로 나누어지고,
// 회원가입버튼 누르면 메타마스크 연동

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import GetOrderState from "./pages/getOrderState";
import Register from "./pages/register";
import CustomerOrder from "./pages/customerOrder";
import StoreAcceptDecline from "./pages/storeAcceptDecline";
import StoreCookFinish from "./pages/storeCookFinish";
import RiderPick from "./pages/riderPick";
import RiderStart from "./pages/riderStart";
import RiderComplete from "./pages/riderComplete";
import { createContext, useState, useEffect } from "react";
import Web3 from "web3";
import RiderCompleteAndPay from "./pages/riderCompleteAndPay";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./lib/web3.config";

export const AppContext = createContext();

function App() {
  const [account, setAccount] = useState();
  const [orderState, setOrderState] = useState("");
  const [orderID, setOrderID] = useState(0); //확인용 // 주문번호 바꾸면 전체적용, 백앤드랑 연결하면 각자의 주문번호 들고오면 됨

  var web3 = new Web3(`${process.env.REACT_APP_API}`); //.env파일에 REACT_APP_API=https://polygon-mumbai.g.alchemy.com/v2/개인api키 작성 후 사용
  var c_address = CONTRACT_ADDRESS;
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

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

  const getOrderState = async () => {
    try {
      const response = await contract.methods.returnOrder(orderID).call();
      if (Number(response.status) === 0) {
        setOrderState("주문 완료");
      } else if (Number(response.status) === 1) {
        setOrderState("가게 주문 수락");
      } else if (Number(response.status) === 2) {
        setOrderState("가게 주문 거절");
      } else if (Number(response.status) === 3) {
        setOrderState("음식 조리 완료");
      } else if (Number(response.status) === 4) {
        setOrderState("배달 수락");
      } else if (Number(response.status) === 5) {
        setOrderState("배달중");
      } else if (Number(response.status) === 6) {
        setOrderState("배달 완료");
      } else {
        setOrderState("");
      }

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderState();
  }, []);

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
          value={{
            account,
            web3,
            contract,
            c_address,
            orderState,
            orderID,
            setOrderID,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/getOrderState" element={<GetOrderState />} />
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
