import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import App from "../App";
import { HomeView } from "../Views/HomeView";
import { MoviesView } from "../Views/MoviesView";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Routes>
        <Route path="" element={<Navigate to="/auth/login" />} />
        <Route path="**" element={<Navigate to="/auth/login" />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/private/*" element={<PortalNegocio />}></Route>
      </Routes>
      {/* <Route path="/" Component={MoviesView} /> */}
    </Routes>
  );
};
