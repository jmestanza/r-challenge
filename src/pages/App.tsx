import "./App.css";

import { useState } from "react";
import CharacterGrid from "../components/character/CharacterGrid";
import NameNotFound from "../components/messages/NameNotFound";
import PaginationDisplay from "../components/pagination/PaginationDisplay";
import SearchBar from "../components/search/SearchBar";
import usePagination from "../hooks/usePagination";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
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
      <SearchBar setName={setName} onSearch={onSearch} />

      {error !== "" ? (
        <NameNotFound errorMsg={error} />
      ) : (
        <>
          <CharacterGrid characters={characters} />
          <PaginationDisplay
            page={page}
            totalPages={totalPages}
            onPrev={onPrev}
            onNext={onNext}
          />
        </>
      )}
    </div>
  );
}

export default App;
