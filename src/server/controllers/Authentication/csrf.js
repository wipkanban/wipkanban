import Tokens from "csrf";

const tokens = new Tokens();
const csrfSecret = tokens.secretSync();

export function setCsrf(req, res, next) {
  res.cookie("XSRF-TOKEN", tokens.create(csrfSecret));
  next();
}

export function checkCsrf(req, res, next) {
  const token = req.get("X-XSRF-TOKEN");

  if (!tokens.verify(csrfSecret, token)) {
    return res.status(403).json({ code: "invalid_csrf_token" });
  }

  next();
}
