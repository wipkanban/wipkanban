import { connect } from "react-redux";
import BoardList from "./BoardList";
import { boards } from "./../../fakeData";

const mapStateToProps = () => {
  return { boards };
};

export default connect(mapStateToProps)(BoardList);
