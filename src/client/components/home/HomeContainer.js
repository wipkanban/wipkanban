import Home from "./Home";
import { connect } from "react-redux";

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
