import Header from "../components/Header";
import Courses from "../components/Courses";
import styles from "./Homepage.module.css";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { settingData } from "../feature/dataSlice";
import { useEffect } from "react";
function Homepage() {
  const dispatch = useDispatch();
  const { isLoading, allCourses } = useSelector((store) => store.data);

  useEffect(
    function () {
      dispatch(settingData());
    },
    [dispatch]
  );
  return (
    <div className={styles.container}>
      <Header />
      <img src="homePageImage.jpg" alt="" className={styles.homeImage} />
      {isLoading ? <Spinner /> : <Courses />}
    </div>
  );
}

export default Homepage;
