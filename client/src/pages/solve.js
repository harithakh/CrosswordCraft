import React from "react";
import CrosswordGrid from "../components/puzzle/CrosswordGrid";
import Clues from "../components/puzzle/Clues";
import "./solve.css";

function Solve() {
  return (
    <>
      <div className="solve-area">
        <p>Crossword #</p>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CrosswordGrid />

          <Clues />
        </section>
      </div>
    </>
  );
}

export default Solve;

// me component eken data base eken data aran ara anik components dekata data yawanda one.
