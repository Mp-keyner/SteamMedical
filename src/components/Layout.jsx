import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import MainPages from "../pages/MainPages";
import CitasList from "../pages/CitasList";
import Citas from "../pages/Citas";
import PagarCitas from "../pages/PagarCitas";
import NotFound from "../pages/NotFound";
import Nav from "./Nav";
import { useState } from "react";

const Layout = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <>
      {
        showNav && <Nav/>
      }
      {/* {location.pathname !== '/Login' && <Nav />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login setShowNav={setShowNav}/>} />
          <Route path="/Main" element={<MainPages />} />
          <Route path="/Citas" element={<Citas />} />
          <Route path="/CitasList" element={<CitasList />} />
          <Route path="/PagarCitas" element={<PagarCitas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
