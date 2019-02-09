import jwt from "jsonwebtoken";

export default function decode(req, res, next) {
  const token =
    typeof req.body["token"] !== "undefined"
      ? req.body["token"]
      : typeof req.cookies["token"] !== "undefined"
      ? req.cookies["token"]
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
