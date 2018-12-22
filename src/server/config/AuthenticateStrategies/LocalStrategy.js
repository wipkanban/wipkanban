import bcrypt from "bcrypt-nodejs";
import path from "path";
const LocalStrategy = require('passport-local').Strategy;

export default User =>
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, cb) => {
      return User.findOne({ email })
        .then(user => {
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
                ? path.join(process.env.UPLOAD_PATH, user.image.newFilename)
                : "/images/user.png",
            firstAccess: user.firstAccess
          };

          return cb(null, payload, { message: "Logged In Successfully" });
        })
        .catch(err => cb(err));
    }
  );
