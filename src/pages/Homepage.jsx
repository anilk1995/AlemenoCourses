import Header from "../components/Header";
import Courses from "../components/Courses";
import styles from "./Homepage.module.css";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
function Homepage() {
  const { isLoading } = useSelector((store) => store.data);

  return (
    <div className={styles.container}>
      <Header />
      <img src="homePageImage.jpg" alt="" className={styles.homeImage} />
      {isLoading ? <Spinner /> : <Courses />}
    </div>
  );
}

export default Homepage;
