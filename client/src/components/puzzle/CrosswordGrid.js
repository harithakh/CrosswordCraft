import React from "react";
import GridBox from "./GridBox";
import "./crosswordgrid.css";

function CrosswordGrid() {
  let boxWidth = 50;
  let boxHeight = 50;

  //let puzzle_id = 1;
  let puzzle_size = 5;

  //puzzle eke size eka anuwa display wena puzzle eka wenas wenna nam me 2D array
  //ekai yata 2D array ekai dekama size eka wenas wenna one
  let index_numbers = [
    [1, 0, 2, 0, 3],
    [0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0],
  ];

  let letters = [
    ["t", "e", "p", "e", "e"],
    ["a", null, "o", null, "a"],
    ["u", "p", "p", "e", "r"],
    ["n", null, "u", null, "l"],
    ["t", "i", "p", "s", "y"],
  ];

  //these are the visible letters at the first. this is an array of tuples.
  //to access those tuples, we can use array indexing with square brackets, just like with a regular array.
  let visible_letter_indexs = [
    [0, 0],
    [1, 2],
    [4, 1],
  ];

  //this creates an empty 2d array of null elements, size = puzzle_size*puzzle_size
  const array_2d = [
    ...Array(puzzle_size)
      .fill(null)
      .map(() => new Array(puzzle_size).fill(null)),
  ];

  // this key helps React identify which elements have changed.
  let id_key = 0;

  // this for loop creates <GridBox /> components and put them in the array_2d.
  for (let i = 0; i < puzzle_size; i++) {
    let b_y = 50 * i;
    let mini_num_y = 15 + 50 * i;
    let t_y = 35 + 50 * i;

    for (let j = 0; j < puzzle_size; j++) {
      var isVisibleAtStart = false;

      // in the for loop below, sets the isVisibleAtStart = true if the index of the current element
      // matches with the any element in the visible_letter_indexs tuple array.
      for (let n = 0; n < visible_letter_indexs.length; n++) {
        if (
          i === visible_letter_indexs[n][0] &&
          j === visible_letter_indexs[n][1]
        ) {
          isVisibleAtStart = true;
        }
      }

      //assigning <GridBox /> to the array.
      array_2d[i][j] = (
        <GridBox
          key={id_key++}
          box_x={50 * j}
          box_y={b_y}
          mini_number_x={5 + 50 * j}
          mini_number_y={mini_num_y}
          text_x={15 + 50 * j}
          text_y={t_y}
          width={boxWidth}
          height={boxHeight}
          index_num={index_numbers[i][j]}
          letter_visibility={isVisibleAtStart}
          letter={letters[i][j]}
        />
      );
    }
  }

  return (
    <>
      <div className="grid-div">
      <p>puzzle #</p>
        <svg
          preserveAspectRatio="xMinYMin meet"
          width={puzzle_size * 50}
          height={puzzle_size * 50}
        >
          <g>
            <rect
              x="0"
              y="0"
              width={puzzle_size * 50}
              height={puzzle_size * 50}
            />
            {array_2d}
          </g>
        </svg>
      </div>
    </>
  );
}

export default CrosswordGrid;
