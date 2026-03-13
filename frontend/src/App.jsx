import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddMedicine from "./pages/AddMedicine";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/add-medicine" element={<AddMedicine />} />

      </Routes>

    </div>
  );
}

export default App;