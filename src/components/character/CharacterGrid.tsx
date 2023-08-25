import { Link } from "react-router-dom";
import { Character } from "../../interfaces/character";
import CharacterCard from "./CharacterCard";

const CharacterGrid = (props: any) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4">
        {props.characters.map((x: Character) => (
          <Link
            key={`character-cards-${x.id}-${x.name}-${x.species}`}
            to={`${x.id}`}
          >
            <CharacterCard {...x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
