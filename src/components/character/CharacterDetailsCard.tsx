const CharacterDetailsCard = (props: any) => {
  const details = props.details;
  const id = props.id;
  return (
    <div>
      <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold">
        Details for ID: {id}
      </div>
      <div className="flex items-center justify-center flex-col">
        <img className="object-fill" src={details.image} alt={details.image} />
        <p className="text-white" key={`details-${id}-name-${details.name}`}>
          Name: {details.name}
        </p>
        <p
          className="text-white"
          key={`details-${id}-species-${details.species}`}
        >
          Specie: {details.species}{" "}
          {details.type === "" ? "" : `(${details.type})`}
        </p>
        <p
          className="text-white"
          key={`details-${id}-status-${details.species}`}
        >
          Status: {details.status}
        </p>
        <p
          className="text-white"
          key={`details-${id}-location-${details.location}`}
        >
          Location: {details.location.name}
        </p>
        <p
          className="text-white"
          key={`details-${id}-episodes-${details.location}`}
        >
          Appears on {details.episode.length} episodes
        </p>
      </div>
    </div>
  );
};

export default CharacterDetailsCard;
