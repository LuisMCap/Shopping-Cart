import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/NavBar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/" element= {<NavBar/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch