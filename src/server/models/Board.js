import mongoose from "mongoose";

const boardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Board = mongoose.model("Board", boardSchema);

export default Board;
