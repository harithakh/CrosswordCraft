import React, { useEffect, useState } from "react";
import axios from "axios"; //a js library used to make HTTP requests from the browser or Node.js

import CrosswordGrid from "./puzzle/CrosswordGrid";
import "./puzzlesFeed.css";

function PuzzlesFeed() {

  const [isLoading, setIsLoading] = useState(true); // for loading screen untill data is loaded from db.

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home") //the api.js sends the entire document specified from the id.
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  // console.log(data); //for testing
  
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="puzzle-feed">
    
      <CrosswordGrid pu_data={data[0]}/>
      <CrosswordGrid pu_data={data[1]}/>
      <CrosswordGrid pu_data={data[0]}/>
      <CrosswordGrid pu_data={data[2]}/>
      {/* <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid /> */}
    </div>
  );
}

export default PuzzlesFeed;
