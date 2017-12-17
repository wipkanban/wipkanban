import Tokens from "csrf";

const tokens = new Tokens();
const csrfSecret = tokens.secretSync();

export function setCsrf(req, res, next) {
  res.cookie("token", tokens.create(csrfSecret));
  next();
}

export function checkCsrf(req, res, next) {
  const token = req.get("token");

  if (!tokens.verify(csrfSecret, token)) {
    return res.status(403).json({ code: "invalid_csrf_token" });
  }

  next();
}
