import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import Task from './components/Modal/Task';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'

const mapStateToProps = (state) => {
    return state.columns
};
const App = ({openModal}) => {

    if ((typeof window !== 'undefined') && !window.localStorage.getItem('user')) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div>
                    <BoardContainer/> {openModal && <Task/>}
                </div>
            </div>
        </div>

    )
}

export default connect(mapStateToProps)(App);
