import User from "../../models/user";

const UpdateUserAccount = (req, res) => {
  let { _id, name, lastname, phone, email, firstAccess } = JSON.parse(
    req.body.user
  );

  User.findById(_id, function(err, user) {
    if (err) handleError(res);

    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.phone = phone;
    user.firstAccess = firstAccess;

    user.save(function(err) {
      if (err) handleError(res);

      res
        .status(200)
        .json({
          success: true
        })
        .end();
    });
  });
};

function handleError(res) {
  return res
    .status(500)
    .json({ success: false })
    .end();
}

export default UpdateUserAccount;
