import jwt from "jsonwebtoken";
import bcrypt from "bcrypt-nodejs";
import path from "path";
import {UNAUTHORIZED, OK} from "../../utils/HttpStatusCode";

export default (User, setCsrf) => {
  return (req, res, next) => {
    const { email, password } = req.body;

    //find user by email
    User.findOne(
      {
        email: email
      },
      (err, user) => {
        if (err) {
          return next(err);
        }
        if (user) {
          if (!bcrypt.compareSync(password, user.password)) {
            return res
              .status(UNAUTHORIZED)
              .json({ success: false, message: "Password invalid" });
          }

          //authentication is valid
          let payload = {
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            image:
              typeof user.image == "object"
                ? path.join(process.env.UPLOAD_PATH, user.image.newFilename)
                : "/images/user.png",
            firstAccess: user.firstAccess
          };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: "24h"
          });

          setCsrf(req, res, () =>
            res.status(OK).cookie("token", token, { httpOnly: true }).json({
              token,
              user: payload,
              success: true,
              message: "Login succesfull! Redirecting..."
            })
          );
        } else {
          //user not exists
          return res
            .status(UNAUTHORIZED)
            .json({ success: false, message: "User not found" });
        }
      }
    );
  };
};
