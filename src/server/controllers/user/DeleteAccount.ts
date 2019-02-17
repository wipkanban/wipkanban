import { OK, INTERNAL_SERVER_ERROR } from "../../utils/HttpStatusCode";

import { IUser } from "../../models/user";
import { Model } from "mongoose";
import { Request, Response } from "express";

export default (User: Model<IUser>) => {
  return (req: Request, res: Response) => {
    let { email } = req.body;

    User.remove({ email: email }, function(err: string) {
      if (err) return new Error(err);

      return res
        .status(OK)
        .json({
          success: true,
          message: "User account deleted with successfull!"
        })
        .end();
    }).catch(() => {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Unable to remove user account" })
        .end();
    });
  };
};
