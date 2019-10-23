import FacebookTokenStrategy, {
  StrategyInstance
} from "passport-facebook-token";
import path from "path";

import { IUser } from "../../models/user";
import { Model } from "mongoose";

export default (User: Model<IUser>): StrategyInstance =>
  new FacebookTokenStrategy(
    {
      clientID: <string>process.env.FACEBOOK_CLIENT_ID,
      clientSecret: <string>process.env.FACEBOOK_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile: any, done: Function) => {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });

        if (!user) {
          user = new User({ email: profile.emails[0].value, password: '12345' });
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
              ? path.join(
                  <string>process.env.UPLOAD_PATH,
                  user.image.newFilename
                )
              : "/images/user.png",
          firstAccess: user.firstAccess
        };

        return done(null, payload, { message: "Logged In Successfully" });
      } catch (error) {
        done(error, false, error.message);
      }
    }
  );
