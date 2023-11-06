import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";
import Header from "../components/Header";

function CourseDetails() {
  const { allCourses, isLoading } = useSelector((store) => store.data);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const courseData =
    allCourses.length > 0 && allCourses.filter((course) => course.id == id);

  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
    students,
  } = courseData[0];

  return (
    <>
      <Header />
      <div className={styles.courseDetails}>
        <img src={thumbnail} alt={name} className={styles.courseThumbnail} />

        <div className={styles.courseInfo}>
          <h2>{name}</h2>
          <p>Instructor: {instructor}</p>
          <p>Description: {description}</p>
          <p>Enrollment Status: {enrollmentStatus}</p>
          <p>Duration: {duration}</p>
          <p>Schedule: {schedule}</p>
          <p>Location: {location}</p>
        </div>

        <div className={styles.prerequisites}>
          <h3>Prerequisites:</h3>
          <ul>
            {prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>

        <div className={styles.syllabus}>
          <h3>Syllabus:</h3>
          <ul>
            {syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.students}>
          <h3>Students:</h3>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                {student.name} - {student.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
