import "./config/configEnv";
import Express from "express";
import render from "./ServerRender";
import router from "./routes";
import bodyParser from "body-parser";
import morgan from "morgan";
import decode from "./middlewares/decode";
import cookieParser from "cookie-parser";
import "./config/dbConnection";

const app = Express();

const LOG_LEVEL: string = process.env.LOG_LEVEL as string;

app.use(morgan(LOG_LEVEL));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//verify jwt
app.use(decode);

app.use("/api/v1", router);

//Serve static files
app.use("/dist", Express.static(__dirname + "/../../public/dist"));
app.use("/assets", Express.static(__dirname + "/../../public/assets"));
app.use("/images", Express.static(__dirname + "/../../public/images"));
app.use("/uploads", Express.static(__dirname + "/../../public/uploads"));
app.use("/data.json", Express.static(__dirname + "/../../public/data.json"));
app.use("/apidoc", Express.static(__dirname + "/../../apidoc"));
app.use(render);

export default app;
