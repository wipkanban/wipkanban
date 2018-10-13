import Board from "./index";
import { connect } from "react-redux";
import columns from "./fakeData";

const mapStateToProps = () => ({ columns });

export default connect(mapStateToProps)(Board);
