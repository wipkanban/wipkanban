import { connect } from "react-redux";
import Preloader from "./Preloader";

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

export default connect(mapStateToProps)(Preloader);
