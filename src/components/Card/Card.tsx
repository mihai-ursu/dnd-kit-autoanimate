import { type Card } from "@/data/cards";

const Card = ({ card }: { card: Card }) => {
  return <div className="w-96 rounded-md border p-4">{card.title}</div>;
};

export default Card;
