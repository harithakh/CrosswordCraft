import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/sign-in";
import NavBar from "./components/NavBar";
import CreatePuzzles from "./pages/create-puzzles";
import Footer from "./components/Footer";
import Solve from "./pages/solve";

function App() {

  return (
    <>
      <Header />
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages/sign-in" element={<SignIn />} />

          <Route path="pages/create-puzzle" element={<CreatePuzzles />} />
          <Route path="pages/about" element={<About />} />
          {/* When this URL is visited, the :puzzleId parameter will be automatically parsed by react-router-dom,
           and the value of puzzleId will be passed to the UserDetail component as a prop. */}
          <Route path="pages/solve/:puzzleId" element={<Solve />} /> 
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
