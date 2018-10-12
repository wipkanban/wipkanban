export default User => {
  function handleError(res) {
    return res
      .status(500)
      .json({ success: false })
      .end();
  }

  return (req, res) => {
    let { userId, firstAccess } = req.body;

    User.findById(userId, function(err, user) {
      if (err) handleError(res);

      user.firstAccess = firstAccess == "true" || false;

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
};
