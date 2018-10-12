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
            .status(200)
            .json({ success: false, message: "User already exists" });
        }

        let newUser = new User({ email, password });

        newUser.save(function(err) {
          if (err) {
            res
              .status(500)
              .json({ success: false, message: err })
              .end();
          }

          res
            .status(200)
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
