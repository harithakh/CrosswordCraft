import React from "react";
import { useState } from "react";

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
  const handlePublishButton = ()=>{
    //publish button should be completed
  }

  return (
    <>
      <form>
        <label>Crossword Puzzle Title: </label>
        <input type="Text" style={{ marginBottom: "10px" }} />
        <br />
        <label>Size of the puzzle: </label>
        <input
          type="number"
          value={puzzleSizeInput}
          onChange={handlePuzzleSizeInput}
        />{" "}
        <br />
        <button type="button" onClick={handleButtonClick}>
          Next
        </button>
        <p>Maximum number of rows/columns available is 15.</p>
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
        <label>Clues Across:</label>
        <textarea value={cluesAcross} onChange={handleCluesAcross} />
        <br />
        <label>Clues Down:</label>
        <textarea value={cluesDown} onChange={handleCluesdown} />
        <br />
        <label>tags:</label>
        <textarea value={tagsInput} onChange={handleTagsInput} />
        <br />
        <button type="button">Publish</button>
      </form>
    </>
  );
}

export default CreatePuzzles;
