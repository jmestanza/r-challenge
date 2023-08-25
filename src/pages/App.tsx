import "./App.css";

import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import usePagination from "../hooks/usePagination";
import { Character } from "../interfaces/character";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { page, totalPages, content, onNext, onPrev, setPage } = usePagination(
    name,
    setError
  );

  const characters = content.results;

  const onSearch = () => {
    setPage(1);
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="flex items-center justify-center">
        <div className="w-80 mt-6 mb-10">
          <SearchBar setName={setName} onSearch={onSearch} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4">
          {characters.map((x: Character) => (
            <Link
              key={`character-cards-${x.id}-${x.name}-${x.species}`}
              to={`${x.id}`}
            >
              <CharacterCard {...x} />
            </Link>
          ))}
        </div>
      </div>

      {error && (
        <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold">
          We couldn't find the name you're looking for
        </div>
      )}

      {!error && (
        <>
          <div className="flex items-center justify-center mt-6 mb-10">
            <button
              disabled={page <= 1}
              onClick={() => onPrev()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
              Prev
            </button>
            <button
              disabled={totalPages !== undefined && page >= totalPages}
              onClick={() => onNext()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Next
            </button>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl text-white font-bold underline mb-10">
              Page: {page} of {totalPages}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
