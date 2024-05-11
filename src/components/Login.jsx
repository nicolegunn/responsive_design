import styles from "./Login.module.css";

export default function Login({ toggleLoginBox }) {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.LoginBox}>
        <span className={styles.Close} onClick={toggleLoginBox}>
          &times;
        </span>
        <h2 className={styles.LoginLabels}>Login</h2>
      </div>
    </div>
  );
}
