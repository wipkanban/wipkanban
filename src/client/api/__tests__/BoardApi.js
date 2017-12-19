import BoardApi from '../BoardApi';
// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

export default configure({ adapter: new Adapter() });


describe("Board Api", () => {

  beforeEach(() => {

  });


  it("should have 1 button for submit", () => {
      BoardApi.login('asasas','asasas').then(rs =>{

        console.log(rs.data);

      });
  });
});
