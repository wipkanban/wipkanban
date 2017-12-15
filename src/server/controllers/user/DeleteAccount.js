import User from "../../models/user";

const DeleteAccount = (req, res) => {
  let { email } = req.body;

  User.remove({ email: email }, function(err) {
    if (err) return new Error(err);

    res
      .status(200)
      .json({
        success: true,
        message: "User account removed with successfull!"
      })
      .end();
  }).catch(err => {
    return res
      .status(500)
      .json({ success: false, message: err })
      .end();
  });
};

export default DeleteAccount;
