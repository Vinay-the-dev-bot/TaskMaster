import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default MainRoute;
