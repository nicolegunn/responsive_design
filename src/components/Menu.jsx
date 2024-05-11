import styles from "./Menu.module.css";
import { useState } from "react";

const navButtons = ["Link1", "Link2", "Link3"];

export default function Menu({ toggleLoginBox }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.MenuBar}>
      <ul className={styles.NavButtonsContainer}>
        {navButtons.map((link, index) => {
          return (
            <li key={index} className={styles.Link}>
              {link}
            </li>
          );
        })}
        <li className={styles.Link} onClick={toggleLoginBox}>
          Login
        </li>
      </ul>
      <div className={styles.HamburgerMenu} onClick={toggleMenu}>
        <span className={styles.Bars}>&#9776;</span>
        {isOpen && (
          <div className={styles.Menu}>
            <span className={styles.Close} onClick={toggleMenu}>
              &times;
            </span>
            <ul className={styles.MenuLinks}>
              {navButtons.map((link, index) => {
                return <li key={index}>{link}</li>;
              })}
              <li onClick={toggleLoginBox}>Login</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
