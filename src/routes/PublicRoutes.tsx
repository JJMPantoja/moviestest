import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Routes>
        <Route path="" element={<Navigate to="/auth/login" />} />
        <Route path="**" element={<Navigate to="/auth/login" />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
      {/* <Route path="/" Component={MoviesView} /> */}
    </Routes>
  );
};
