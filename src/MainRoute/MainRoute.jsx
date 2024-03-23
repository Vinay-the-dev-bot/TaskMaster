import { Route, Routes } from "react-router";
import Home from "../Pages/Home";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<AddTask />} />
        <Route path="/update/:id" element={<UpdateTask />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default MainRoute;
