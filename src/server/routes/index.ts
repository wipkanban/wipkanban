import Express from "express";
import User from "../models/user";
import Board from "../models/Board";
import CreateAccountFactory from "../controllers/user/CreateAccount";
import BoardFactory, { addBoard } from "../controllers/Board";
import DeleteAccountFactory from "../controllers/user/DeleteAccount";
import UpdateUserAccountFactory from "../controllers/user/UpdateUserAccount";
import setCsrf from "../middlewares/csrf";
import LoginFactory, { oauthFacebook } from "../controllers/Authentication";
import { requireAuth } from "../middlewares/requireAuth";
import upload from "../middlewares/upload";
import cors from "cors";
import passport from "passport";
import LocalStrategy from "../config/AuthenticateStrategies/LocalStrategy";
import FacebookStrategy from "../config/AuthenticateStrategies/FacebookStrategy";

let corsOptions = {
  origin: process.env.URL_APPLICATION,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

passport.use(LocalStrategy(User));
passport.use("facebookToken", FacebookStrategy(User));

const router = Express.Router();
/**
 * @api {post} /api/v1/user Creating account user
 * @apiName wipKanbanApi
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission public
 *
 * @apiDescription Create account user and send email confirmation
 *
 * @apiParam {String} email Email of the user.
 * @apiParam {String} password Password unique ID.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user
 *
 * @apiExample Example usage:
 * curl -i http://<IPSERVER>/api/v1/user
 *
 * @apiSuccess {Boolean} success True or false to the request.
 * @apiSuccess {String} message  Message success or fail.
 *
 * @apiError User already exists When user with same email is send.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "successr": "false"
 *       "message": "User already exist"
 *     }
 *
 */
router.post("/user", cors(corsOptions), CreateAccountFactory(User));

router
  .route("/oauth/facebook")
  .post(
    passport.authenticate("facebookToken", { session: false }),
    oauthFacebook
  );

/**
 * @api {delete} /api/v1/user Delete account user
 * @apiName wipKanbanApi
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission public
 *
 * @apiDescription Delete account user and send email confirmation
 *
 * @apiParam {Integer} _id id of the user on database.
 * @apiParam {String} token Token generate by application.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user
 *
 * @apiExample Example usage:
 * curl -i http://<IPSERVER>/api/v1/user
 *
 * @apiSuccess {Boolean} success Return true value.
 * @apiSuccess {String} message  Message success.
 *
 */
router.delete("/user", requireAuth, DeleteAccountFactory(User));

/**
 * @api {put} /api/v1/user/[iduser] Update the account user
 * @apiName wipKanbanApi
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission public
 *
 * @apiDescription Update the account user
 *
 * @apiParam {Integer} _id id of the user on database.
 * @apiParam {bool} firstAccess true or false.
 * @apiParam {String} token Token generate by application.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user/setFirstAccess
 *
 * @apiExample Example usage:
 * curl -i http://<IPSERVER>/api/v1/user/setFirstAccess
 *
 * @apiSuccess {Boolean} success Return true value.
 * @apiSuccess {String} message  Message success.
 *
 */
router.put(
  "/user/:userid",
  requireAuth,
  upload.single("image"),
  UpdateUserAccountFactory(User)
);

/**
 * @api {post} /api/v1/login Login
 * @apiVersion 0.1.0
 * @apiName wipKanbanApi
 * @apiGroup Authentication
 * @apiPermission public
 *
 * @apiDescription Login a user and generate token application
 *
 * @apiParam {String} email email of the user.
 * @apiParam {String} password Password of the user.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user/login
 *
 * @apiExample Example usage:
 * curl -i https://<IPSERVER>/api/v1/login
 *
 * @apiSuccess {Boolean} success True to the request.
 * @apiSuccess {String} message  Message success.
 * @apiSuccess {Object} user  User data.
 *
 * @apiError Usernotfound When email user is not found.
 * @apiError Passwordinvalid When email exist, but the password does not matching.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "successr": "false"
 *       "message": "User already exist"
 *     }
 *
 */
router.post("/login", cors(corsOptions), LoginFactory(User, setCsrf));

/**
 * @api {post} /api/v1/logout Logout
 * @apiVersion 0.1.0
 * @apiName wipKanbanApi
 * @apiGroup Authentication
 * @apiPermission public
 *
 * @apiDescription Logout a user of the application
 *
 * @apiParam {String} token Token of the user.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user/login
 *
 * @apiExample Example usage:
 * curl -i https://<IPSERVER>/api/v1/login
 *
 * @apiSuccess {Boolean} success True to the request.
 * @apiSuccess {String} message  Message success.
 *
 * @apiError Usernotfound When email user is not found.
 * @apiError Passwordinvalid When email exist, but the password does not matching.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "successr": "false"
 *       "message": "User already exist"
 *     }
 *
 */
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res
    .json({
      success: true,
      message: "Logout succesfull!"
    })
    .end();
});

router.get("/boards/:iduser", requireAuth, cors(corsOptions), BoardFactory(Board));

router.post("/board", requireAuth, cors(corsOptions), addBoard(Board));

export default router;
