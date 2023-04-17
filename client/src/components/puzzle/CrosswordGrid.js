import React from "react";
import { Link, useParams } from "react-router-dom";

import GridBox from "./GridBox";
import "./crosswordgrid.css";

function CrosswordGrid(props) {
  const boxWidth = 50;
  const boxHeight = 50;

  var { puzzle_id } = useParams();

  /* The ?. allows us to safely access properties of an object without getting an error
   if the object is nullish (null or undefined).
   The ?? is called the Nullish Coalescing operator,
    which allows us to provide a default value in case a value is nullish (null or undefined).
  */

  puzzle_id = props.pu_data?.puzzle_id ?? "";
  let puzzle_size = props.pu_data?.puzzle_size ?? "";
  let created_by = props.pu_data?.created_by ?? "";

  //both index_numbers_2d_array and letters_2d_array must have the same size in order to change the
  // displaying puzzle size according to puzzle size

  //here the 1D array that came from props turns into a 2D array
  let index_numbers = props.pu_data?.boxes?.map((obj) => obj.box_number);
  var index_numbers_2d_array = [];
  for (let i = 0; i < index_numbers?.length; i += puzzle_size) {
    const row = index_numbers.slice(i, i + puzzle_size);
    index_numbers_2d_array.push(row);
  }
  // console.log(index_numbers); //test
  // console.log(index_numbers_2d_array); //test

  let letters1 = props.pu_data?.boxes?.map((obj) => obj.letter);
  let letters_2d_array = [];
  for (let i = 0; i < letters1?.length; i += puzzle_size) {
    const row = letters1.slice(i, i + puzzle_size);
    letters_2d_array.push(row);
  }
  // console.log(letters_2d_array); //test

  //these are the visible letters at the first. this is an array of tuples.
  //to access those tuples, we can use array indexing with square brackets, just like with a regular array.
  let visible_letter_indexs = [
    [0, 0],
    [1, 2],
    [4, 1], //this must be replaced with the data comming from the database.
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
          getInput={false} //this must be false for crossword feed. its true for now
          key={id_key++}
          box_x={50 * j}
          box_y={b_y}
          mini_number_x={5 + 50 * j}
          mini_number_y={mini_num_y}
          text_x={15 + 50 * j}
          text_y={t_y}
          width={boxWidth}
          height={boxHeight}
          index_num={index_numbers_2d_array[i][j]}
          letter_visibility={isVisibleAtStart}
          letter={letters_2d_array[i][j]}
        />
      );
    }
  }

  return (
    <>
      <div className="grid-div">
        <div className="details-div">
          <p>puzzle {puzzle_id}</p>
          <p>Created by: {created_by}</p>
        </div>
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
        <Link to={`pages/solve/${puzzle_id}`} className="link-to-solve">
          Solve
        </Link>
      </div>
    </>
  );
}

export default CrosswordGrid;
