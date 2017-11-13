import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import Task from './components/Modal/Task';
import {connect} from 'react-redux';
import Navbar from './components/Navbar'

const mapStateToProps = (state) => {
    return state.columns
};
const App = ({openModal}) => {

    return (
        <div>
            <Navbar/>
            <div className="container-fluid">

                <BoardContainer/> {openModal && <Task/>}

            </div>
        </div>

    )
}

export default connect(mapStateToProps)(App);
