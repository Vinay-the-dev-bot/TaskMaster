import { Route, Routes } from "react-router";
import Login from "../Pages/Login";
import DashBoard from "../Pages/Dashboard";
import HomePage from "../Pages/HomePage";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default MainRoute;
