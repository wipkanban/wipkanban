import User from "../models/user";

const CreateAccount = (req, res, next) => {

  let email = req.body.email;
  let password = req.body.password;

  // verify if user already exists
  User.findOne(
    {
      email: email
    },
    (err, user) => {
      if (err) {
        return next(err);
      }
      if (user) {
        return res
          .status(200)
          .json({ success: false, message: "User already exists" });
      }

      let newUser = new User({email, password });

      newUser
        .save(next)
        .then(() => {
          res
            .status(200)
            .json({
              success: true,
              message: "User account created with successfull!"
            })
            .end();
        })
        .catch(err => {
          return res.status(500).json({ success: false, message: err });
        });
    }
  );
};

export default CreateAccount;
