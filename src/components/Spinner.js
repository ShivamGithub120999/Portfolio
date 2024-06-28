import React from "react";
import loader from "../assets/1495.gif";

function Spinner() {
  return (
    <>
      <div className="h-72 w-80 items-center justify-center mx-auto">
        <img className="h-64 w-64 mx-auto text-center" alt="Loading" src={loader} />
      </div>
    </>
  );
}

export default Spinner;
