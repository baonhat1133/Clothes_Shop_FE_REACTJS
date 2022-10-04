import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/component/HomePage";
import NavBar from "./pages/NavBar/NavBar";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
