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
        const user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          done(null, false, "USer does not exists");
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
