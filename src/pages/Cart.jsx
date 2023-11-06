import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

function Cart() {
  const { cartCourses } = useSelector((store) => store.cart);
  return (
    <div>
      <Header />
      <main className={styles.container}>
        {cartCourses.length > 0 ? (
          cartCourses.map((course) => (
            <CartItem course={course} key={course.id} />
          ))
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </main>
    </div>
  );
}

export default Cart;
