import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../server";

chai.use(chaiHttp);
var expect = chai.expect;
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
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body)
          .to.have.property("success")
          .equal(true);
        expect(res.body)
          .to.have.property("message")
          .equal("User account created with successfull!");
        done();
      });
  });

  it("/POST testing user that already exists, do not create", done => {
    chai
      .request(server)
      .post("/api/v1/user")
      .send(fields)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body)
          .to.have.property("success")
          .equal(false);
        expect(res.body)
          .to.have.property("message")
          .equal("User already exists");

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

        expect(res).to.have.status(200);

        expect(dataAuthenticated).to.be.a("object");

        expect(dataAuthenticated)
          .to.have.property("success")
          .equal(true);

        expect(dataAuthenticated)
          .to.have.property("message")
          .equal("Login succesfull! Redirecting...");

        expect(dataAuthenticated)
          .to.have.property("token")
          .be.a("string");

        expect(dataAuthenticated)
          .to.have.property("user")
          .be.a("object");

        done();
      });
  });

  it("/POST it should to delete account user", done => {
    chai
      .request(server)
      .delete("/api/v1/user")
      .send({
        email: fields.email,
        "token": dataAuthenticated.token
      })
      .end((err, res) => {
        expect(res).to.have.status(200);

        expect(res.body).to.be.a("object");

        expect(res.body)
          .to.have.property("success")
          .equal(true);

        expect(res.body)
          .to.have.property("message")
          .equal("User account deleted with successfull!");

        done();
      });
  });
});
