import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import "./App.css";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import UserPanel from "./pages/UserPanel/UserPanel";
import AdminMessages from "./components/AdminsPageComponents/AdminMessagesManager/AdminMessages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
