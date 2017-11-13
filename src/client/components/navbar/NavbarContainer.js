import React from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';

const mapStateToProps = ({loginReducer:{user}}) => ({user});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;