import jwt from "jsonwebtoken";

export default function decode(req, res, next) {
  const token =
    typeof req.get("auth-token") !== "undefined"
      ? req.get("auth-token")
      : typeof req.cookies["auth-token"] !== "undefined"
        ? req.cookies["auth-token"]
        : undefined;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        req.authFailed = true;
      } else {
        req.currentUser = decoded;
      }
      next();
    });
  } else {
    req.noTokenProvided = true;
    next();
  }
}
