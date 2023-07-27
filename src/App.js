import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import AuthRegisterPage from "./pages/auth/AuthRegisterPage";
import BrandListPage from "./pages/brand/BrandListPage";
import VehicleListPage from "./pages/vehicle/VehicleListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
        <Route path="/brand" element={<BrandListPage />} />
        <Route path="/vehicle" element={<VehicleListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;