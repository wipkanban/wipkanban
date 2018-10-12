import __DEV__ from "../../isDev";

export function requireAuth(req, res, next) {
  //for development token is not required
  if (!__DEV__) {
    if (req.authFailed) {
      return res.status(403).json({ message: "Failed to authenticate token" }).end();
    }

    if (req.noTokenProvided) {
      return res.status(403).json({ message: "No token provided" }).end();
    }
  }

  next();
}
