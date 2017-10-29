import User from '../../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import {setCsrf} from './csrf';

export function login(req, res, next) {

    const {email, password} = req.body

    //find user by email
    User.findOne({
        email: email
    }, (err, user) => {

        if (err) {
            return next(err);
        }
        if (user) {

            if (!bcrypt.compareSync(password, user.password)) {
                return res
                    .status(422)
                    .json({success: false, message: "Password invalid"})
            }

            //authentication is valid
            const {
                password: _,
                ...rest
            } = user //removing password of the payload
            const token = jwt.sign(rest, 'MYSCRESTTOKEN', {expiresIn: '24h'});
            setCsrf(req, res, () => res.cookie('auth-token', token, {httpOnly: true}).json({token}))

        } else { //user not exists
            return res
                .status(422)
                .json({success: false, message: "User not found"});
        }

    });
};