import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { usePromiseTracker } from "react-promise-tracker";
// import { Loader } from "react-loader-spinner";
//import "./spinner.css";

export const Spinner = (props) => {
  //   const { promiseInProgress } = usePromiseTracker();

  return (
    <div style={{textAlign: 'center'}}>
      {/* <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" /> */}
      {/* <p>Loading ..</p> */}
      <ClipLoader color="#8B3DFF" size={50}/>
    </div>
  );
};
