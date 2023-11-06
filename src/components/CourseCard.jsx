import { addCourse } from "../feature/cartSlice";
import Button from "./Button";
import styles from "./CourseCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addEnrolledCourse } from "../feature/enrolledSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const dispatch = useDispatch();
  const { cartCourses } = useSelector((store) => store.cart);
  const [enrolled, setEnrolled] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart(course) {
    dispatch(addCourse(course));
    setAddedToCart(true);
  }

  function handleAddEnroll(course) {
    dispatch(addEnrolledCourse(course));
    setEnrolled(true);
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__content}>
          <img src={course.thumbnail} alt="" className={styles.thumbnail}></img>
          <Link className={styles.link} to={`course?id=${course.id}`}>
            <div className={styles.intro}>
              <h2 className={styles.heading}>{course.name}</h2>
              <p>{course.description}</p>
              <p className={styles.card_name}>Instructor:{course.instructor}</p>
              <p className={styles.price}>Price: $3499</p>
            </div>
          </Link>
          <div className={styles.buttons}>
            {!addedToCart && (
              <Button type="primary" onClick={() => handleAddToCart(course)}>
                Add to cart
              </Button>
            )}
            {addedToCart && (
              <Link to="cart">
                <Button type="completed">Go to cart</Button>
              </Link>
            )}

            {!enrolled && (
              <Button type="primary" onClick={() => handleAddEnroll(course)}>
                Enroll now
              </Button>
            )}
            {enrolled && <Button type="completed">Enrolled</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
