import React, { useState } from "react";
import GridBox from "./GridBox";
import "./crosswordgrid.css";

function CrosswordGrid(props) {
  const boxWidth = 50;
  const boxHeight = 50;

  // console.log(props.pu_data && props.pu_data.puzzle_id); // need to check if the object is null or not.
  console.log(props.pu_data);
  /* The ?. allows us to safely access properties of an object without getting an error
   if the object is nullish (null or undefined).
   The ?? is called the Nullish Coalescing operator,
    which allows us to provide a default value in case a value is nullish (null or undefined).
  */

  let puzzle_id = props.pu_data?.puzzle_id ?? "";
  let puzzle_size = props.pu_data?.puzzle_size ?? "";

  //puzzle eke size eka anuwa display wena puzzle eka wenas wenna nam index_numbers_2d_array ekei
  //ekai yata letters_2d_array ekai dekama size eka wenas wenna one
  
  //here the 1D array that came from props turns into a 2D array
  let index_numbers = props.pu_data?.boxes?.map(obj => obj.box_number);
  var index_numbers_2d_array = []
  for(let i=0; i<index_numbers?.length; i+=puzzle_size){
    const row = index_numbers.slice(i, i+puzzle_size);
    index_numbers_2d_array.push(row);
  }
  console.log(index_numbers); //4 test
  console.log(index_numbers_2d_array); //4 test

  let letters = [
    ["t", "e", "p", "e", "e"],
    ["a", null, "o", null, "a"],
    ["u", "p", "p", "e", "r"],
    ["n", null, "u", null, "l"],
    ["t", "i", "p", "s", "y"],
  ];

  let letters1 = props.pu_data?.boxes?.map(obj => obj.letter);
  let letters_2d_array = [] ;
  for(let i=0; i<letters1?.length; i+=puzzle_size){
    const row = letters1.slice(i, i+puzzle_size);
    letters_2d_array.push(row);
  }
  console.log(letters_2d_array);

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
        <p>puzzle #{puzzle_id}</p>
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
