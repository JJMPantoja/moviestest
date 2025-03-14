import { Navigate, Route, Routes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/auth/login" />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/home/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};
