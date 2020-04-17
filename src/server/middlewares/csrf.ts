import Tokens from "csrf";
import { Request, Response, NextFunction } from "express";

const tokens: Tokens = new Tokens();
const csrfSecret = tokens.secretSync();

export default function setCsrf(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.cookie("token", tokens.create(csrfSecret));
  next();
}

export function checkCsrf(req: any, res: Response, next: NextFunction) {
  const token: string = req.get("token") as string;

  if (!tokens.verify(csrfSecret, token)) {
    return res.status(403).json({ code: "invalid_csrf_token" });
  }

 return next();
}
