import { OK, INTERNAL_SERVER_ERROR } from "../../utils/HttpStatusCode";
import { IBoard } from "../../models/Board";
import { Model } from "mongoose";
import { Request, Response, NextFunction } from "express";

export interface IUserAuthInfoRequest extends Request {
  currentUser: { _id: number }; // or any other type
}

export default (Board: Model<IBoard>) => {
  return (req: Request | any, res: Response, next: NextFunction) => {
    let { iduser } = req.params;

    Board.find({ userId: iduser }, (err, boards) => {
      if (err) {
        return next(err);
      }

      res
        .status(OK)
        .json({
          success: true,
          boards: boards
        })
        .end();
    });
  };
};

export function addBoard(Board: Model<IBoard>) {
  return (req: any, res: Response) => {
    let { name } = req.body;
    let { _id } = req.currentUser;

    let newBoard = new Board({ name, userId: _id });

    newBoard.save(function(err: string, board: IBoard): void {
      if (err) {
        res
          .status(INTERNAL_SERVER_ERROR)
          .json({ success: false, message: err })
          .end();
      }

      res
        .status(OK)
        .json({
          success: true,
          board,
          message: "Board created with successfull!"
        })
        .end();
    });
  };
}
