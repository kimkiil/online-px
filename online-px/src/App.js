import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Join" element={<JoinPage />} />
      <Route path="*" element={"일치하는 페이지가 없습니다."} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

