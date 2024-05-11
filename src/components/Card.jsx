import styles from "./Card.module.css";

export default function Card({ cardImage, cardTitle, cardText }) {
  return (
    <div className={styles.Card}>
      <img src={cardImage} alt="placeholder" />
      <div className={styles.TextContainer}>
        <h3 className={styles.Title}>{cardTitle}</h3>
        <p className={styles.CardText}>{cardText}</p>
      </div>
    </div>
  );
}
