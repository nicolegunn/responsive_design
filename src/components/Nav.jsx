import styles from "./Nav.module.css";
import Menu from "./Menu";

export default function Nav({ toggleLoginBox }) {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.LogoContainer}>
        <div className={styles.Circle}></div>
        <h2 className={styles.Heading}>Company Name</h2>
      </div>
      <Menu toggleLoginBox={toggleLoginBox} />
    </div>
  );
}
