import { Document, Schema, Model, model } from "mongoose";
import bcrypt from "bcrypt-nodejs";

const SALT_FACTOR = 10;
const noop: () => void = function() {};

export interface IUser extends Document {
  name: string;
  lastname: string;
  email?: string;
  image: {
    newFilename: string;
  };
  firstName?: string;
  lastName?: string;
  password: string;
  firstAccess: string;
  phone: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: Object
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

userSchema.pre<IUser>("save", function(done: Function) {
  let user = this;

  if (!this.isModified("password")) {
    return done();
  }
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) {
      return done(err);
    }
    bcrypt.hash(
      this.password,
      salt,
      noop,
      (err: Object, hashedPassword: string) => {
        if (err) {
          return done(err);
        }
        user.password = hashedPassword;
        done();
      }
    );
  });
});

userSchema.methods.checkPassword = function(guess: string, done: Function) {
  bcrypt.compare(guess, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
