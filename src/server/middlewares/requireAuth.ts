import { Response, NextFunction } from "express";

export function requireAuth(req: any, res: Response, next: NextFunction) {
  if (req.authFailed) {
    return res
      .status(403)
      .json({ message: "Failed to authenticate token" })
      .end();
  }

  if (req.noTokenProvided) {
    return res
      .status(403)
      .json({ message: "No token provided" })
      .end();
  }

  next();
}
