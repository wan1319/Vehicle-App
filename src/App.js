import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import AuthRegisterPage from "./pages/auth/AuthRegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;