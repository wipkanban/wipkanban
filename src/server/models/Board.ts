import { Document, Schema, Model, model } from "mongoose";

export interface IBoard extends Document {
  name: string;
  userId: Object
}

const boardSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const Board: Model<IBoard> = model<IBoard>("Board", boardSchema);

export default Board;
