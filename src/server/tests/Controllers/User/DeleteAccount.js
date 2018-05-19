import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../../app";
import User from "../../../models/user";

chai.use(chaiHttp);

const request = chai.request.agent(app);

describe("User - Delete account user", () => {
  afterEach(() => {
    request.app.close();
  });

  test("/Post it should to delete account user", done => {
    let user = new User({ email: "este@teste.com", password: 12345 });
    user.save(() => {
      request
        .delete("/api/v1/user")
        .send({
          email:user.email
        })
        .end((err, res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.message).toEqual("User account deleted with successfull!");
          done();
        });
    });
  });
});
