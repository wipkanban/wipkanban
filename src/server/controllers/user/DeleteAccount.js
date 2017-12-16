import User from "../../models/user";

const DeleteAccount = (req, res) => {
  let { _id } = req.body;

  User.remove({ _id: _id }, function(err) {
    if (err) return new Error(err);

    res
      .status(200)
      .json({
        success: true,
        message: "User account deleted with successfull!"
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
