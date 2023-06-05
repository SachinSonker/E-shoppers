import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Spinner component
export const Spinner = (props) => {
  return (
    <div style={{textAlign: 'center'}}>
      <ClipLoader color="#8B3DFF" size={50}/>
    </div>
  );
};
