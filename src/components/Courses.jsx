import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

function Courses() {
  const { filteredData, allCourses, searchQuery } = useSelector(
    (store) => store.data
  );

  return (
    <div className={styles.cardsConteainer}>
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
          <Spinner />
          <h1>Course Not Found</h1>
        </>
      )}
    </div>
  );
}

export default Courses;
