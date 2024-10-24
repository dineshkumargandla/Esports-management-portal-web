import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/EsportsPortal.scss";
import "assets/demo/demo.css";

import {Auth} from "./layouts/Auth.jsx";
import {Registration} from "./layouts/Registration.jsx";
import {UserDashBoard} from "./layouts/UserDashBoard.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/registration/*" element={<Registration />} />
      <Route path="/user/*" element={<UserDashBoard />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </BrowserRouter>
);
