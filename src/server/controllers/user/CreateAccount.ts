import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR
} from "../../utils/HttpStatusCode";

import * as ModelUser from "../../models/user";

import { Model } from "mongoose";
import { Response, NextFunction } from "express";

export default (User: Model<ModelUser.IUser>) => {
  return (req: any, res: Response, next: NextFunction) => {
    let { email, password } = req.body;

    // verify if user already exists
    User.findOne(
      {
        email: email
      },
      (err, user) => {
        if (err) {
          return next(err);
        }
        if (user) {
          return res
            .status(BAD_REQUEST)
            .json({ success: false, message: "User already exists" })
            .end();
        }

        let newUser = new ModelUser.default({ email, password });

        newUser.save(function(err) {
          if (err) {
            res
              .status(INTERNAL_SERVER_ERROR)
              .json({ success: false, message: err })
              .end();
          }

          res
            .status(CREATED)
            .json({
              success: true,
              message: "User account created with successfull!"
            })
            .end();
        });
      }
    );
  };
};
