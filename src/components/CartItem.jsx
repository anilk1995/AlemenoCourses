import { deleteCourse } from "../feature/cartSlice";
import Button from "./Button";
import styles from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ course }) {
  const dispatch = useDispatch();

  function handleRemoveCart(id) {
    dispatch(deleteCourse(id));
  }

  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={course.thumbnail} alt="" className={styles.courseThumbnail} />
      </div>
      <div className={styles.courseInfo}>
        <div className={styles.headings}>
          <h1>{course.name}</h1>
          <p>Instructor - {course.instructor}</p>
        </div>
        <div>
          <h2>Schedule: {course.schedule}</h2>
          <p>{"price"}</p>
        </div>
        <div>
          <Button type="back" onClick={() => handleRemoveCart(course.id)}>
            Remove Course
          </Button>
          <Button type="primary">Enroll Now </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
