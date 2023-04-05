const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  puzzleId: Number,
  puzzleSize: Number,
  isPublic: Number,
  createdBy: String,
  dateCreated: Date,
  tags: [String],
  boxes: [
    {
      boxNumber: Number,
      letter: String,
    },
  ],
  visibleLetterIndexes: [
    {
      boxIndex: [Number],
      letter: String,
    },
  ],
  cluesAcross: [String],
  cluesDown: [String],
});

const Puzzle = mongoose.model("Puzzle", schema);

module.exports = Puzzle;
