import React from "react";
import { useState, useEffect } from "react";

import { getCharacters } from "../services/character";
import { PaginatedResponse } from "../interfaces/pagination";
import { Character } from "../interfaces/character";

const usePagination = (name: string, setError: Function) => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState<PaginatedResponse<Character[]>>({
    info: { count: -1, pages: -1, next: null, prev: null },
    results: [],
  });

  const totalPages =
    content.info.pages === -1 ? Number.MAX_VALUE : content.info.pages;

  const onNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    getCharacters(page, name)
      .then((res) => {
        setError(false);
        setContent(res.data);
      })
      .catch((e) => {
        setError(true);
        setContent({
          info: { count: -1, pages: -1, next: null, prev: null },
          results: [],
        });
      });
  }, [page, name]);

  return { page, totalPages, content, onNext, onPrev, setPage };
};

export default usePagination;
