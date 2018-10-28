import { OK, INTERNAL_SERVER_ERROR } from "../../utils/HttpStatusCode";

export default User => {
  return (req, res) => {
    let { email } = req.body;

    User.remove({ email: email }, function(err) {
      if (err) return new Error(err);

      res
        .status(OK)
        .json({
          success: true,
          message: "User account deleted with successfull!"
        })
        .end();
    }).catch(() => {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Unable to remove user account" })
        .end();
    });
  };
};
