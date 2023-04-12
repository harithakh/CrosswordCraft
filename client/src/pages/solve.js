import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import CrosswordGrid from "../components/puzzle/CrosswordGrid";
import Clues from "../components/puzzle/Clues";
import SolvingGrid from "../components/SolvingGrid";

import "./solve.css";

function Solve(props) {
  const location = useLocation();
  const p_id = location.pathname.split("/").pop();
  // now we have the id. we need to get data from database according to that id

  const [isLoading, setIsLoading] = useState(true); // for loading screen untill data is loaded from db.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/puzzles/${p_id}`) //the api.js sends the entire document specified from the id.
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);
  console.log(data); //for testing

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
    <>
      <div className="solve-area">
        {/* <p>Crossword # {puzzleId}</p> */}

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CrosswordGrid pu_data={data}/>
          <SolvingGrid pu_data={data}/>

          <Clues />
        </section>
      </div>
    </>
  );
}

export default Solve;

// me component eken data base eken data aran ara anik components dekata data yawanda one.
