import User from "../../models/user";

const UpdateUserAccount = (req, res) => {
  let { name, lastname, phone, email, firstAccess } = JSON.parse(req.body.user);

  let { image } = req.body;
  let _id = req.params.userid;

  User.findById(_id, function(err, user) {
    if (err) handleError(res, err);

    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.phone = phone;
    user.firstAccess = firstAccess;
    user.image = image;

    user.save(function(err) {
      if (err) handleError(res, err);

      res
        .status(200)
        .json({
          success: true
        })
        .end();
    });
  });
};

function handleError(res, err) {
  return res
    .status(500)
    .json({ success: false, error: err })
    .end();
}

export default UpdateUserAccount;
