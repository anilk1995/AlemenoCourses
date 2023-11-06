import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import StudentDashboard from "./pages/StudentDashboard";
import CourseDetails from "./pages/CourseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(function () {
    async function fetchCourses() {
      const response = await fetch("http://localhost:9000/courses");
      const data = await response.json();
      setAllCourses(data);
    }
    fetchCourses();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage data={allCourses} />}></Route>
        <Route path="cart" element={<Cart />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/course" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
