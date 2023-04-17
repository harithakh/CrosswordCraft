import React from "react";
import { useState } from "react";

import "./create-puzzles.css";

function CreatePuzzles() {
  //puzzle size user input
  const [puzzleSizeInput, setPuzzleSizeInput] = useState(0);
  const handlePuzzleSizeInput = (event) => {
    setPuzzleSizeInput(event.target.value);
  };

  //{} is an empty object. we can later add properties to it dynamically as needed, based on the user's input in the table.
  const [inputValues, setInputValues] = useState({}); //inputValues object holds the values of all the input fields in the table.

  const handleInputChange = (event) => {
    // function to handle changes to the inputs
    const { name, value } = event.target;

    // To ensure that the new state is always based on the latest version
    //of the previous state, the updater function receives the previous state as an argument.
    //In this case, prevValues is the previous state of the inputValues object.
    setInputValues((prevValues) => ({
      ...prevValues, //The new state value is an object that is created by spreading the properties of the previous state object (prevValues) into a new object using the spread operator (...)
      [name]: value,
    }));
  };

  // the table based on puzzleSizeInput
  const tableRows = [];
  for (let i = 0; i < puzzleSizeInput; i++) {
    const cells = [];
    for (let j = 0; j < puzzleSizeInput; j++) {
      cells.push(
        <td key={`${i}-${j}`}>
          <input
            style={{ width: "40px", height: "40px" }}
            type="text"
            name={`${i}-${j}`}
            value={inputValues[`${i}-${j}`] || ""}
            onChange={handleInputChange}
          />
        </td>
      );
    }
    tableRows.push(<tr key={i}>{cells}</tr>);
  }

  //this hook tracks the button of the first step.
  const [showGrid, setShowGrid] = useState(false);
  const handleButtonClick = () => {
    if (15 < puzzleSizeInput) {
      alert("The number of columns or rows should not exceed 15");
    } else if (puzzleSizeInput <= 0) {
      alert("Please enter valid value!");
    } else {
      setShowGrid(true);
    }
  };

  //Clues across
  const [cluesAcross, setCluesAcross] = useState("");
  const handleCluesAcross = (event) => {
    setCluesAcross(event.target.value);
  };
  //Clues down
  const [cluesDown, setCluesDown] = useState("");
  const handleCluesdown = (event) => {
    setCluesDown(event.target.value);
  };
  // tags
  const [tagsInput, setTagsInput] = useState("");
  const handleTagsInput = (event) => {
    setTagsInput(event.target.value);
  };

  // publish button
  const [publishPuzzle, setPublishPuzzle] = useState(false);
  const handlePublishButton = () => {
    //publish button should be completed
  };

  return (
    <>
      <div className="puzzle-create-form-div">
        <form>
          <label className="puzzle-create-lable">
            Crossword Puzzle Title:
            <input type="Text" style={{ marginBottom: "10px" }} />
          </label>
          <br />
          <label className="puzzle-create-lable">
            Size of the puzzle:
            <input
              type="number"
              value={puzzleSizeInput}
              onChange={handlePuzzleSizeInput}
            />
          </label>
          <br />
          <button
            className="create-puzzle-button"
            type="button"
            onClick={handleButtonClick}
          >
            Next
          </button>
          <br />
          <p>
            Maximum number of rows/columns available is 15. Type the relevant
            letter in the box. if a box has an index number, type it befor the
            letter. Eg: 1, A
          </p>
          {/* below code is conditional rendering. React will only render the component 
        if the condition on the left-hand side of the && operator is true.  */}
          {showGrid && puzzleSizeInput < 16 && (
            <div>
              <table>
                <tbody>{tableRows}</tbody>
                <p>{inputValues["0-0"]}</p>
              </table>
            </div>
          )}
          <br />
          <p>type clues one by one with relevant index numbers.</p>
          <p>Eg: </p>
          <p>1. Tent's support going around disk </p>
          <p>4. Superior meal not small</p>
          <p>5. Gratuities you initiated a little drunk</p>
          <label>
            Clues Across:
            <textarea
              className="puzzle-create-textarea"
              value={cluesAcross}
              onChange={handleCluesAcross}
            />
          </label>
          <br />
          <label>
            Clues Down:
            <textarea
              className="puzzle-create-textarea"
              value={cluesDown}
              onChange={handleCluesdown}
            />
          </label>
          <br /><br />
          <p>type tags separated by commas.</p>
          <p>Eg: tag1, tag2, tag3</p>
          <label>
            tags:
            <textarea
              className="puzzle-create-textarea"
              value={tagsInput}
              onChange={handleTagsInput}
            />
          </label>
          <br />
          <button className="create-puzzle-button" type="button">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

export default CreatePuzzles;
