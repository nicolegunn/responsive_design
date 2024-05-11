import styles from "./Hero.module.css";

export default function HeroContent() {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeadingContainer}>
        <h1 className={styles.Heading}>Lorem ipsum dolor sit amet</h1>
      </div>
      <div className={styles.InputContainer}>
        <input type="text" className={styles.TextBox} />
        <button className={styles.Button}>Search</button>
      </div>
    </div>
  );
}
