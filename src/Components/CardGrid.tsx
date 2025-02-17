import React from "react";
import FlipCardComponent from "./FlipCardComponent";
import data from "../data";

// Definimos el tipo de datos esperados en `data`
interface CardData {
  frontIcon: string;
  backIcon: string;
  frontText: string;
  backText: string;
  isFlipped: boolean;
}

const CardGrid: React.FC = () => {
  return (
    <div>
      <div className="w-4/5 m-auto my-56" id="part2">
        <h2 className="text-center font-archivo text-2xl">My List of Skills</h2>
        <div className="flex flex-wrap gap-6 p-4 justify-center">
          {data.cards.map((card: CardData, index: number) => (
            <FlipCardComponent
              key={index}
              frontIcon={card.frontIcon}
              backIcon={card.backIcon}
              frontText={card.frontText}
              backText={card.backText}
              isFlippedProp={card.isFlipped} // Pasamos la propiedad isFlipped
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
