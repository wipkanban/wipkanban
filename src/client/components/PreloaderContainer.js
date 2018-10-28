import { connect } from "react-redux";
import Preloader from "./Preloader";

const mapStateToProps = ({ userReducer: { showPreloader } }) => ({ showPreloader });

export default connect(mapStateToProps)(Preloader);
