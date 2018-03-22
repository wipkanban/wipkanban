import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../../app";
import User from "../../../models/user";

chai.use(chaiHttp);

const request = chai.request.agent(app);

describe("User - setfirstAccess", () => {
  let user;

  afterEach(() => {
    user.remove({ _id: user._id });
    request.app.close();
  });

  test("/Post it should to set first access to the true", done => {
    user = new User({ email: "este@teste.com", password: 12345 });
    user.save(() => {
      request
        .post("/api/v1/user/setFirstAccess")
        .send({
          firstAccess: "false",
          userId: user._id
        })
        .end((err, res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.success).toEqual(true);
          done();
        });
    });
  });
});
