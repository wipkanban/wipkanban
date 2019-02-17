import bcrypt from "bcrypt-nodejs";
import path from "path";
import { Strategy as LocalStrategy } from "passport-local";

import { IUser } from "../../models/user";
import { Model } from "mongoose";

export default (User: Model<IUser>): LocalStrategy =>
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email: string, password: string, cb: Function) => {
      return User.findOne({ email })
        .then((user: any) => {
          if (user) {
            if (!bcrypt.compareSync(password, user.password)) {
              return cb(null, false, {
                message: "Incorrect email or password."
              });
            }
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
                ? path.join(
                    <string>process.env.UPLOAD_PATH,
                    user.image.newFilename
                  )
                : "/images/user.png",
            firstAccess: user.firstAccess
          };

          return cb(null, payload, { message: "Logged In Successfully" });
        })
        .catch(err => cb(err));
    }
  );
