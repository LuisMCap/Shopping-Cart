import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import NavBar from "./components/NavBar";
import CriteriaCont from "./components/criteria/MiscCont";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<NavBar />} />
          <Route path="/" element={<CriteriaCont />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch