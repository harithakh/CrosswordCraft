const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  puzzle_id: Number, //this variable name should be the same as the name in the mongodb document.
  puzzle_size: Number,
  public: Number,
  created_by: String,
  date_created: Date,
  tags: [String],
  boxes: [
    {
      box_number: Number,
      letter: String,
    },
  ],
  visible_letter_indexs: [
    {
      box_index: [Number],
      letter: String,
    },
  ],
  clues_across: [String],
  clues_down: [String],
});

const Puzzle = mongoose.model("Puzzle", schema);

module.exports = Puzzle;
