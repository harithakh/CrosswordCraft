import React, { useEffect, useState } from "react";
import axios from "axios"; //a js library used to make HTTP requests from the browser or Node.js

import CrosswordGrid from "./puzzle/CrosswordGrid";
import "./puzzlesFeed.css";

function PuzzlesFeed() {

  console.log(" data data ... data "); //for testing
  const [isLoading, setIsLoading] = useState(true); // for loading screen untill data is loaded from db.

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  console.log(data[2]); //for testing

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
      <div>{data.length > 0 && <p>....its {data[1].clues_across[0]}</p>}</div>
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
      <CrosswordGrid />
    </div>
  );
}

export default PuzzlesFeed;
