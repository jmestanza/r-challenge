import React from "react";

import { CharacterProps } from "../interfaces/characterProps";

const CharacterCard = (props: CharacterProps) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img className="object-fill" src={props.image} alt={props.image} />
      <p className="text-white" key={`${props.id}-${props.name}`}>
        Name: {props.name}
      </p>
      <p className="text-white" key={`${props.id}-${props.species}`}>
        Specie: {props.species}
      </p>
    </div>
  );
};

export default CharacterCard;
