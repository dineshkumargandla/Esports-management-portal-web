import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import {UserLayout} from "layouts/User/UserLayout";

import "assets/scss/EsportsPortal.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {ThemeContextWrapper} from "./components/ThemeWrapper/ThemeWrapper";
import {BackgroundColorWrapper} from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { Auth } from "./layouts/Auth.jsx";
import { Registration } from "./layouts/Registration.jsx";
import { OrganizationLayout } from "./layouts/Organization/OrganizationLayout";
import { AdminLayout } from "./layouts/Admin/AdminLayout";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/registration/*" element={<Registration />} />
          <Route path="/user/*" element={<UserLayout />} />
          <Route path="/organization/*" element={<OrganizationLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route
            path="*"
            element={<Navigate to="/auth/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);
