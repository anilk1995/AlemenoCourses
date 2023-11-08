import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

function Courses() {
  const { filteredData, allCourses, searchQuery, error } = useSelector(
    (store) => store.data
  );

  return (
    <div className={styles.cardsConteainer}>
      {error && (
        <h1 className={styles.errorMessage}>
          {error}: Server is not responding
        </h1>
      )}
      {filteredData.length === 0 &&
        searchQuery === "" &&
        allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      {filteredData.length > 0 &&
        filteredData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      {filteredData.length === 0 && searchQuery.length !== 0 && (
        <>
          <h1 className={styles.errorMessage}>
            We don't teach this course yet{" "}
          </h1>
        </>
      )}
    </div>
  );
}

export default Courses;
