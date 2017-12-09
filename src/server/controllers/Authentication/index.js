import User from '../../models/user';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt-nodejs'
import {setCsrf} from './csrf';
import secret from './secret'

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
                    .status(200)
                    .json({success: false, message: "Password invalid"})
            }

            //authentication is valid
            let payload = {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                image: user.image || '/images/user.jpg'
            };
            const token = jwt.sign(payload, secret, {expiresIn: '24h'});

            setCsrf(req, res, () => res.cookie('auth-token', token, {httpOnly: true}).json({token, user: payload, success: true, message: "Login succesfull! Redirecting..."}))

        } else { //user not exists
            return res
                .status(200)
                .json({success: false, message: "User not found"});
        }

    });
}

export function decode(req, res, next) {

    const token = typeof req.get('auth-token') !== undefined
        ? req.get('auth-token')
        : (typeof req.cookies['auth-token'] !== undefined
            ? req.cookies['auth-token']
            : undefined);

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                req.authFailed = true
            } else {
                req.currentUser = decoded
            }
            next()
        })
    } else {
        req.noTokenProvided = true
        next()
    }
}