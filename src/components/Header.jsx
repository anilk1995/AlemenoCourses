import styles from "./Header.module.css";
import Button from "./Button";

import { Link, Navigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <span>Alemeno</span>
      </Link>
      <SearchBar />
      <ul className={styles.credential}>
        <li>
          <Link to="/cart">
            <Button type="primary">Cart</Button>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <Button type="primary">Dashboard</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
