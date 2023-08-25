import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const onNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const onReset = () => {
    setPage(1);
  };

  return { page, onNext, onPrev, onReset };
};

export default usePagination;
