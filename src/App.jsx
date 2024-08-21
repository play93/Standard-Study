import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayFirst from "./components/DayFirst";
import DaySecond from "./components/DaySecond";
import DayThird from "./components/DayThird";
import Home from "./pages/Home";
import Gt from "./pages/Gt";
import Detail from "./pages/Detail";
import Test from "./pages/Test";
import DetailQueryParameter from "./pages/DetailQueryParameter";

function App() {
  return (
    <BrowserRouter>
      <DayFirst />
      <DaySecond />
      <DayThird />
      <Routes>
        {/* 어디로 오면 어디로 보낼지 */}
        {/* 1. 어디로 오면 : path */}
        {/* 2. 어디로 보낼지 : element */}
        <Route path="/" element={<Home />} />
        <Route path="/gt" element={<Gt />} />
        <Route path="/detail/:userName" element={<Detail />} />
        <Route path="/test/:first/:second" element={<Test />} />
        <Route
          path="/detailqueryparameter/:userName"
          element={<DetailQueryParameter />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
