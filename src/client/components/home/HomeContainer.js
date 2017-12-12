import Home from "./Home";
import { connect } from "react-redux";

const mapStateToProps = ({ loginReducer: { user } }) => ({ user });

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
