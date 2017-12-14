import { connect } from "react-redux";

import Navbar from "./Navbar";

const mapStateToProps = ({ userReducer: { user } }) => ({ user });

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
