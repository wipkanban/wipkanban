import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

const SALT_FACTOR = 10;
const noop = function() {};

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  firstAccess: {
    type: Boolean,
    default: true
  }
});

userSchema.pre("save", function(done) {
  let user = this;
  if (!user.isModified("password")) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return done(err);
    }
    bcrypt.hash(user.password, salt, noop, (err, hashedPassword) => {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = (guess, done) => {
  bcrypt.compare(guess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

export default User;
