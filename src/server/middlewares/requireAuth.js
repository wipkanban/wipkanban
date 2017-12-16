export function requireAuth(req, res, next) {
  if (req.authFailed) {
    return res.status(403).json({ message: "Failed to authenticate token" });
  }

  if (req.noTokenProvided) {
    return res.status(403).json({ message: "No token provided" });
  }

  next();
}
