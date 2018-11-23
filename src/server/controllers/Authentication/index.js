import jwt from "jsonwebtoken";
import passport from "passport";
import { UNAUTHORIZED, OK } from "../../utils/HttpStatusCode";
import LocalStrategy from "../../config/AuthenticateStrategies/LocalStrategy";

export default (User, setCsrf) => {
  return (req, res) => {
    passport.use(LocalStrategy);
    passport.authenticate("local", { session: false }, (err, user) => {
      if (err || !user) {
        return res
          .status(UNAUTHORIZED)
          .json({ success: false, message: "Password invalid" })
          .end();
      }
      req.login(user, { session: false }, err => {
        if (err) {
          res.send(err);
        }

        const token = jwt.sign(user, process.env.SECRET, {
          expiresIn: "24h"
        });

        return setCsrf(req, res, () =>
          res
            .status(OK)
            .cookie("token", token, { httpOnly: true })
            .json({
              token,
              user: user,
              success: true,
              message: "Login succesfull! Redirecting..."
            })
            .end()
        );
      });
    })(req, res);
  };
};
