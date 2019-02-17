import Home from "./index";
import { connect } from "react-redux";

const mapStateToProps = ({ userReducer: { user } }:any) => ({ user });

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
