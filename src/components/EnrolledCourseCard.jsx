import styles from "./EnrolledCourseCard.module.css";
import Button from "./Button";
import { useState } from "react";

function EnrolledCourseCard({ course, onClick }) {
  const [completed, setCompleted] = useState(false);

  function handleSetCompleted() {
    setCompleted((com) => !com);
    onClick();
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__content}>
          <img src={course.thumbnail} alt="" className={styles.thumbnail} />
          <div className={styles.intro}>
            <h2 className={styles.heading}>{course.name}</h2>
            <p className={styles.description}>{course.description}</p>
            <p className={styles.card_name}>Instructor:{course.instructor}</p>
            <p className={styles.price}>Price: $3499</p>
          </div>
          <div className={styles.inputs}>
            <div>
              {!completed && (
                <Button type="back" onClick={handleSetCompleted}>
                  Mark as Completed
                </Button>
              )}
              {completed && <Button type="completed">Mark as Completed</Button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourseCard;
