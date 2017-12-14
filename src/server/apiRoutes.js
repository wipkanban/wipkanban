import Express from "express";
import CreateAccount from "./controllers/CreateAccount";
import { login } from "./controllers/Authentication";
const api = Express.Router();

/**
 * @api {post} /user/create Creating account user
 * @apiName wipKanbanApi
 * @apiGroup User
 * @apiPermission admin
 *
 ** @apiDescription In this case "apiUse" is defined and used.
 *  Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the user.
 * @apiParam {String} password Password unique ID.
 * @apiParam {String} token Your token applicatoin generate byt the system.
 *
 * @apiSampleRequest https://wipkanban.com/api/v1/user/create
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Boolean} success True or false to the request.
 * @apiSuccess {String} message  Message success or fail.
 *
 * @apiError User already exists When user with same email is send.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *
 */

api.post("/user/create", CreateAccount);
api.post("/login", login);

export default api;
