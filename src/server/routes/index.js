import Express from "express";
import CreateAccount from "../controllers/user/CreateAccount";
import DeleteAccount from "../controllers/user/DeleteAccount";
import SetFirstAccess from "../controllers/user/SetFirstAccess";
import { login } from "../controllers/Authentication";
import { requireAuth } from "../middlewares/requireAuth";
import cors from "cors";

let corsOptions = {
  origin: process.env.URL_APPLICATION,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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
router.post("/user", cors(corsOptions), CreateAccount);

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
router.delete("/user", requireAuth, DeleteAccount);

/**
 * @api {delete} /api/v1/user/setFirstAccess Update if is the first access of the user
 * @apiName wipKanbanApi
 * @apiVersion 0.1.0
 * @apiGroup User
 * @apiPermission public
 *
 * @apiDescription Delete account user and send email confirmation
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
router.post("/user/setFirstAccess", requireAuth, SetFirstAccess);

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
router.post("/login", cors(corsOptions), login);

export default router;
