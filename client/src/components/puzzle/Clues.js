import React from "react";

let clues_across = [
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
];

let clues_down = [
  "1. Wind up tense relative",
  "2. Support not right for children's book",
  "3. Relay boardcast before time",
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
  "1. Tent's support going around disk",
  "4. Superior meal not small",
  "5. Gratuities you initiated a little drunk",
];

function Clues() {
  //In the map() method, React automatically passes two arguments to the callback function we provide:
  //the current element being processed, and the index of that element in the original array.

  return (
    <div style={{fontFamily: "Verdana" }}>
      <ul style={{ listStyleType: "none"}}>
        <p>Across</p>
        {clues_across.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul style={{ listStyleType: "none", fontFamily: "sans-serif" }}>
        <p>Down</p>
        {clues_down.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clues;
