import React from "react";

const PaginationDisplay = (props: any) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center mt-6 mb-10">
        <button
          disabled={props.page <= 1}
          onClick={() => props.onPrev()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          disabled={
            props.totalPages !== undefined && props.page >= props.totalPages
          }
          onClick={() => props.onNext()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl text-white font-bold underline mb-10">
          Page: {props.page} of {props.totalPages}
        </p>
      </div>
    </div>
  );
};

export default PaginationDisplay;
