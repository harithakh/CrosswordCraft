import React from "react";

function Clues(props) {
  //In the map() method, React automatically passes two arguments to the callback function we provide:
  //the current element being processed, and the index of that element in the original array.

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        <p>Across</p>
        {props.clues_across?.map((item, index) => (
          <li style={{ fontFamily: "Roboto", fontWeight: 300 }} key={index}>
            {item}
          </li>
        ))}
      </ul>

      <ul style={{ listStyleType: "none", fontFamily: "sans-serif" }}>
        <p>Down</p>
        {props.clues_down?.map((item, index) => (
          <li style={{ fontFamily: "Roboto", fontWeight: 300 }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clues;
