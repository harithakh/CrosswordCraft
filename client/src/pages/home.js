import React from "react";
import PuzzlesFeed from "../components/PuzzlesFeed";

import "./home.css";

function Home() {
  return (
    <div className="home-div">
      <div id="main-intro">
        <h1>Crossword Puzzle Community!</h1>
        <h3>Create, Solve & Share</h3>
        <hr />
        <p id="intro">
          It's a simple and faster way to build, solve and share crossword
          puzzles online!
        </p>
      </div>

      <h4>Puzzle Feed</h4>
      <hr />
      <PuzzlesFeed />
    </div>
  );
}

export default Home;
