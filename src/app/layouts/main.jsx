import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
  const { error, initialize, progress, status } = useMockData();
  const handleClick = () => {
    console.log("clicked");
    initialize();
  };
  return (
    <div className="container mt-5">
      <h1> Main Page</h1>
      <h3>initialize data in FireBase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>error: {error}</li>}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        initialize
      </button>
    </div>
  );
};

export default Main;
