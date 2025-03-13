import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../Views/auth/Views/LoginPage";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
