import "./Card.css";

export function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src}></img>
        <img src="/img/cover.png" className="back" onClick={handleClick}></img>
      </div>
    </div>
  );
}
