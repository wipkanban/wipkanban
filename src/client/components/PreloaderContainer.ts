import { connect } from "react-redux";
import Preloader from "./Preloader";

const mapStateToProps = ({ userReducer: { showPreloader } }: any) => ({
  showPreloader
});

export default connect(mapStateToProps)(Preloader);
