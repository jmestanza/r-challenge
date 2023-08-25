import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../interfaces/details";
import { getCharacter } from "../services/character";

const CharacterDetailsCard = (props: any) => {
  const { id } = useParams();
  // id = 20 has type different than ""

  const [details, setDetails] = useState<Details>({
    image: "",
    name: "",
    status: "",
    type: null,
    species: "",
    location: { name: "", url: "" },
    episode: [],
  });
  const [error, setError] = useState(false);
  console.log("Error : ", error);

  useEffect(() => {
    getCharacter(id === undefined ? "" : id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((e) => {
        // console.log("error", e);
        setError(true);
      });
  }, [id]);

  return (
    <div>
      <div className="bg-zinc-900 min-h-screen flex flex-col">
        {error ? (
          <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold">
            There is no page associated with that ID
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold">
              Details for ID: {id}
            </div>
            <div className="flex items-center justify-center flex-col">
              <img
                className="object-fill"
                src={details.image}
                alt={details.image}
              />
              <p
                className="text-white"
                key={`details-${id}-name-${details.name}`}
              >
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
        )}
      </div>
    </div>
  );
};

export default CharacterDetailsCard;
