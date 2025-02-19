import React from "react";
import FlipCardComponent from "./FlipCardComponent";
import data from "../data"; // Importamos los datos de data.ts

// Usamos el tipo de datos que ya está definido en data.ts
const CardGrid: React.FC = () => {
  return (
    <div>
      <div className="w-4/5 m-auto my-56" id="part2">
        <h2 className="text-center font-archivo text-2xl">My List of Skills</h2>
        <div className="flex flex-wrap gap-6 p-4 justify-center">
          {data.cards.map((card, index) => (
            <FlipCardComponent
              key={index}
              frontIcon={card.frontIcon}
              backIcon={card.backIcon}
              frontText={card.frontText}
              backText={card.backText}
              isFlippedProp={card.isFlipped ?? false} // Pasamos la propiedad isFlipped
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
