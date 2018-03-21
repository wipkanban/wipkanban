import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../../server";
import User from "../../../models/user";

chai.use(chaiHttp);

const request = chai.request.agent(server);

describe("User - setfirstAccess", () => {
  let fields,user;

  beforeEach(() => {
    user = new User({email:"este@teste.com",password:12345});
    user.save();

    fields = {
      firstAccess: "false",
      userId: user._id
    };
  });

  afterEach(() => {
    user.remove({_id:user._id});
    request.app.close()
  });

  test("/Post it should to set first access to the true", done => {
    request
      .post("/api/v1/user/setFirstAccess")
      .send(fields)
      .end((err, res) => {
        expect(200).toEqual(200);
        expect(res.body.success).toEqual(true);
        done();
      });
  });
});
