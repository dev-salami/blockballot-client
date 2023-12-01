import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-12 w-12"></div>
    </div>
  );
}

export default Loader;
