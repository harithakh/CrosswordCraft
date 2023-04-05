import React from "react";
import "./gridbox.css";

function GridBox(props) {
  //if the index_num is > 0, index is set to index_num.
  if (props.index_num > 0) {
    var index = props.index_num;
  }

  if (props.letter == null) {
    var isBlack = true;
  }

  if (props.letter_visibility) {
    var the_letter = props.letter;
  }

  //meke input field ekak danda one. useState hooks use karanna one userge input eka save kara ganna.
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
        x={props.text_x}
        y={props.text_y}
        textAnchor="start"
        fontSize="24"
        style={{ fontFamily: "Sniglet" }}
      >
        {the_letter}
      </text>
    </g>
  );
}

export default GridBox;
