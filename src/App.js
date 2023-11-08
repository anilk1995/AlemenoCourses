import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import StudentDashboard from "./pages/StudentDashboard";
import CourseDetails from "./pages/CourseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingData, loadingData } from "./feature/dataSlice";

function App() {
  const { isLoading } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchCourses() {
        try {
          dispatch(loadingData(true));
          const response = await fetch("http://localhost:9000/courses");
          if (!response.ok) throw new Error(`server not responded`);
          const data = await response.json();
          dispatch(settingData(data));
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchCourses();
    },
    [dispatch]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/course" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
