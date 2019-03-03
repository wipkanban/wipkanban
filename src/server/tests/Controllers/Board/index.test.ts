import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../../app";
import { CREATED } from "../../../utils/HttpStatusCode";

chai.use(chaiHttp);

const request = chai.request.agent(app);

describe("Board", () => {
  let fields: any, dataAuthenticated: any;

  beforeEach(() => {
    fields = {
      email: "teste21111@teste.com",
      password: "mypassword"
    };
  });

  test("/POST it should to create a account user", done => {
    request
      .post("/api/v1/user")
      .send(fields)
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(CREATED);

        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account created with successfull!"
        );

        done();
      });
  });

  test("/POST it should to login user and return token user", done => {
    request
      .post("/api/v1/login")
      .send(fields)
      .end((err, res: any) => {
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

  test("/POST it should to create a board", done => {
    let updateFields = {
      name: "Test board",
      userId: "5c69dadfa9bfda82f1ae85a7",
      token: dataAuthenticated.token
    };
    request
      .post(`/api/v1/board`)
      .send(updateFields)
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
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
      .end((err, res: any) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual(
          "User account deleted with successfull!"
        );

        done();
      });
  });
});
