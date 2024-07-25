import Link from "next/link";
import cards from "../data/cards";
import Card from "@/components/Card/Card";
import Sortable from "@/components/Sortable/Sortable";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-slate-700">
      <div className="container flex flex-wrap items-center justify-center gap-12 px-4 py-16">
        {/* {cards.map((card) => (
          <Card key={card.title} card={card} />
        ))} */}

        <Sortable />
      </div>
    </main>
  );
}
