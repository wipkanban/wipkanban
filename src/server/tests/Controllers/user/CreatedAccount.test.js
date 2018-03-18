import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../server";

chai.use(chaiHttp);

//Our parent block
describe("User Account", () => {
  let fields, dataAuthenticated;

  beforeEach(() => {
    fields = {
      email: "teste@teste.com",
      password: "mypassword"
    };
  });

  it("/POST it should to create a account user", done => {
    chai
      .request(server)
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

  it("/POST testing user that already exists, do not create", done => {
    chai
      .request(server)
      .post("/api/v1/user")
      .send(fields)
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(false);
        expect(res.body.message).toEqual("User already exists");

        done();
      });
  });

  it("/POST it should to login user and return token user", done => {
    chai
      .request(server)
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

  it("/POST it should to delete account user", done => {
    chai
      .request(server)
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
