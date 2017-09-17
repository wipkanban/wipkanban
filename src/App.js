import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import Task from './components/Modal/Task';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom'

const mapStateToProps = (state) => {
    return state.columns
};
const App = ({openModal}) => {
    
    return(
        <div>
            <BoardContainer/>
            {openModal && <Task />}
        </div>
    )
}

export default connect(mapStateToProps)(App);
