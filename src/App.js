import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
