import { useState } from "react";
import ReactCardFlip from "react-card-flip";

// Definimos la interfaz de las props
interface FlipCardProps {
  frontIcon: string;
  backIcon: string;
  frontText: string;
  backText: string;
  isFlippedProp: boolean;
}

const FlipCardComponent: React.FC<FlipCardProps> = ({ 
  frontIcon, 
  backIcon, 
  frontText, 
  backText, 
  isFlippedProp 
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(isFlippedProp);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front Side */}
      <div
        className="w-36 h-48 bg-[#1c1b1f] flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <img src={frontIcon} alt="Front Icon" className="w-16 h-16 mb-4" />
        <p className="text-lg font-bold">{frontText}</p>
      </div>

      {/* Back Side */}
      <div
        className="w-36 h-48 bg-gray-300 flex flex-col items-center justify-center rounded-lg shadow-md cursor-pointer"
        onClick={handleClick}
      >
        <img src={backIcon} alt="Back Icon" className="w-16 h-16 mb-4" />
        <p className="text-lg font-bold">{backText}</p>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCardComponent;
