import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

export default function decode(req: any, res: Response, next: NextFunction) {
  const token: string =
    typeof req.body["token"] !== "undefined"
      ? req.body["token"]
      : typeof req.cookies["token"] !== "undefined"
      ? req.cookies["token"]
      : undefined;

  if (token) {
    jwt.verify(
      token,
      process.env.SECRET as string,
      (err: Object, decoded: Object): void => {
        if (err) {
          req.authFailed = true;
        } else {
          req.currentUser = decoded;
        }
        next();
      }
    );
  } else {
    req.noTokenProvided = true;
    next();
  }
}
