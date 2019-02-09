import { OK, INTERNAL_SERVER_ERROR } from "../../utils/HttpStatusCode";

export default Board => {
  return (req, res, next) => {
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

export function addBoard(Board) {
  return (req, res) => {
    let { name } = req.body;
    let { _id } = req.currentUser;

    let newBoard = new Board({ name, userId: _id });

    newBoard.save(function(err, board) {
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
