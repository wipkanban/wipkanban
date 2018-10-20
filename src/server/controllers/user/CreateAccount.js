import {BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR} from "../../utils/HttpStatusCode";

export default User => {
  return (req, res, next) => {
    let { email, password } = req.body;

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
            .status(BAD_REQUEST)
            .json({ success: false, message: "User already exists" })
            .end();
        }

        let newUser = new User({ email, password });

        newUser.save(function(err) {
          if (err) {
            res
              .status(INTERNAL_SERVER_ERROR)
              .json({ success: false, message: err })
              .end();
          }

          res
            .status(CREATED)
            .json({
              success: true,
              message: "User account created with successfull!"
            })
            .end();
        });
      }
    );
  };
};
