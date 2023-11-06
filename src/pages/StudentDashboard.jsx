import { useState } from "react";
import CourseCard from "../components/CourseCard";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import Header from "../components/Header";
import styles from "./StudentDashboard.module.css";
import { useSelector } from "react-redux";

function StudentDashboard() {
  const { enrolledCourses } = useSelector((store) => store.enrolled);
  const [count, setCount] = useState(0);

  function handleSetCountPlus() {
    setCount((count) => count + 1);
  }

  const percentage = (count / enrolledCourses.length) * 100;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.dashboard}>My Dashboard</h1>
        {enrolledCourses.length > 0 && (
          <div className={styles.progressbarContainer}>
            <p className={styles.progressTitle}>
              Your Progress: {Math.floor(percentage)}%
            </p>
            <progress
              value={count}
              max={enrolledCourses.length}
              className={styles.progressbar}
            >
              10%
            </progress>
          </div>
        )}

        <div className={styles.enrolledCourses}>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <EnrolledCourseCard
                key={course.id}
                course={course}
                onClick={handleSetCountPlus}
              />
            ))
          ) : (
            <h1 className={styles.notEnrolled}>
              You have not enrolled in any course yet.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
