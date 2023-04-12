import { React, useState } from "react";
import "./gridbox.css";

function GridBox(props) {
  //if the index_num is > 0,'index' is set to index_num.
  if (props.index_num > 0) {
    var index = props.index_num;
  }

  if (props.letter == null) {
    var isBlack = true;
  }

  if (props.letter_visibility) {
    var the_letter = props.letter;
  }

  const [inputText, setTextInput] = useState("");

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const itt = props.getInput;

  return (
    <g>
      <rect
        x={props.box_x}
        y={props.box_y}
        width={props.width}
        height={props.height}
        stroke="#293462"
        stroke-widths="5"
        style={isBlack ? { fill: "#293462" } : { fill: "white" }}
      />

      <text
        x={props.mini_number_x}
        y={props.mini_number_y}
        textAnchor="start"
        fontSize="12"
      >
        {index}
      </text>

      <text
        className="main-letter"
        x={props.text_x}
        y={props.text_y}
        textAnchor="start"
        fontSize="24"
        style={{ fontFamily: "Sniglet" }}
      >
        {the_letter}
      </text>

      {/* Render the input only if letter_visibility is false */}
      {props.getInput && !props.letter_visibility && !isBlack && (
        <foreignObject
          x={props.text_x - 2}
          y={props.text_y - 22}
          width={props.width - 25}
          height={props.height - 25}
        >
          <text className="text-element-display">{inputText}</text>
          <input
            className="text-input"
            type="text"
            value={inputText}
            onChange={handleInputChange}
            style={{ opacity: 0 }} //opasiti is set to zero, <input> element is hidden but take the input and set its value to
          ></input>
        </foreignObject>
      )}
    </g>
  );
}

export default GridBox;
