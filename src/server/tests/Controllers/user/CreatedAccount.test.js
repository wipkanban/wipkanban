import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../../app";

chai.use(chaiHttp);

const request = chai.request.agent(app);

//Our parent block
describe("User Account", () => {
  let fields, dataAuthenticated;

  beforeEach(() => {
    fields = {
      email: "teste@teste.com",
      password: "mypassword"
    };
  });

  afterEach(() => request.app.close());

  test("/POST it should to create a account user", done => {
    request
      .post("/api/v1/user")
      .send(fields)
      .end((err, res) => {

        expect(res.statusCode).toEqual(200);

        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account created with successfull!"
        );

        done();
      });
  });

  test("/POST testing user that already exists, do not create", done => {
    request
      .post("/api/v1/user")
      .send(fields)
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(false);
        expect(res.body.message).toEqual("User already exists");

        done();
      });
  });

  test("/POST it should to login user and return token user", done => {
    request
      .post("/api/v1/login")
      .send(fields)
      .end((err, res) => {
        dataAuthenticated = res.body;

        expect(res.statusCode).toEqual(200);
        expect(dataAuthenticated.success).toEqual(true);
        expect(dataAuthenticated.message).toEqual(
          "Login succesfull! Redirecting..."
        );
        expect(dataAuthenticated).toHaveProperty("token");

        expect(dataAuthenticated).toHaveProperty("user");

        done();
      });
  });

  test("/POST it should to delete account user", done => {
    request
      .delete("/api/v1/user")
      .send({
        email: fields.email,
        token: dataAuthenticated.token
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account deleted with successfull!"
        );

        done();
      });
  });
});
