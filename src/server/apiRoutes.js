import Express from 'express';
import passport from 'passport';
import User from './models/user';

const api = Express.Router()

api.post('/createAccount', (req, res, next) => {

    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;

    // verify if user already exists
    User.findOne({
        email: email
    }, (err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            return res
                .status(200)
                .json({success: false, message: "User already exists"});
        }

        let newUser = new User({name, lastname, email, password});

        newUser
            .save(next)
            .then(user => {
                return res
                .status(200)
                .json({success: true,message:"User account created with successfull!", user});
            })
            .catch(err => {
                return res
                .status(500)
                .json({success: false, message: err});
            });

    });
});

export default api;