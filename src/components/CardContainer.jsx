import styles from "./Card.module.css";
import Card from "./Card.jsx";

export default function CardContainer({ cards }) {
  return (
    <div className={styles.CardContainer}>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            cardImage={card.image}
            cardTitle={card.title}
            cardText={card.text}
          />
        );
      })}
    </div>
  );
}
