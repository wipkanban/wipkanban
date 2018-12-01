import FacebookTokenStrategy from "passport-facebook-token";
import path from "path";

export default User =>
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          user = new User({ email: profile.emails[0].value, password: 12345 });
          user.save();
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

        return done(null, payload, { message: "Logged In Successfully" });
      } catch (error) {
        done(error, false, error.message);
      }
    }
  );
