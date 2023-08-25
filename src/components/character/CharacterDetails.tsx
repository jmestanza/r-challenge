import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../../interfaces/details";
import { getCharacter } from "../../services/character";
import ErrorMessage from "../messages/ErrorMessage";
import CharacterDetailsCard from "./CharacterDetailsCard";

const initState = {
  image: "",
  name: "",
  status: "",
  type: null,
  species: "",
  location: { name: "", url: "" },
  episode: [],
  error: null,
};

const CharacterDetails = (props: any) => {
  const { id } = useParams();

  const [details, setDetails] = useState<Details>(initState);

  useEffect(() => {
    getCharacter(id === undefined ? "" : id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((e) => {
        setDetails({ ...initState, error: e.response.data.error });
      });
  }, [id]);

  return (
    <div>
      <div className="bg-zinc-900 min-h-screen flex flex-col">
        {details.error ? (
          <ErrorMessage
            errorMsg={details.error}
            text={"Couldn't find Character for given ID."}
          />
        ) : (
          details.name && <CharacterDetailsCard id={id} details={details} />
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
