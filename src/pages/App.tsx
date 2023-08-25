import "./App.css";

import { useEffect, useState } from "react";
import CharacterGrid from "../components/character/CharacterGrid";
import ErrorMessage from "../components/messages/ErrorMessage";
import PaginationDisplay from "../components/pagination/PaginationDisplay";
import SearchBar from "../components/search/SearchBar";
import usePagination from "../hooks/usePagination";
import { getCharacters } from "../services/character";
import { Character } from "../interfaces/character";
import { PaginatedResponse } from "../interfaces/pagination";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState<PaginatedResponse<Character[]>>({
    info: { count: -1, pages: -1, next: null, prev: null },
    results: [],
    error: null,
  });
  const { page, onNext, onPrev, onReset } = usePagination();

  useEffect(() => {
    getCharacters(page, name)
      .then((res) => {
        setContent(res.data);
      })
      .catch((e) => {
        setContent({
          info: { count: -1, pages: -1, next: null, prev: null },
          results: [],
          error: e.response.data.error,
        });
      });
  }, [page, name]);

  const characters = content.results;
  const totalPages =
    content.info.pages === -1 ? Number.MAX_VALUE : content.info.pages;

  const onSearch = () => {
    onReset();
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <SearchBar setName={setName} onSearch={onSearch} />

      {content.error ? (
        <ErrorMessage
          errorMsg={content.error}
          text={"We couldn't find the name you're looking for."}
        />
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
