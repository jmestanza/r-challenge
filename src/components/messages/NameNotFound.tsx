import React from "react";

const NameNotFound = (props: any) => {
  return (
    <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold flex-col">
      <div> We couldn't find the name you're looking for.</div>
      <div className="mt-2"> Error response from server: {props.errorMsg}</div>
    </div>
  );
};

export default NameNotFound;
