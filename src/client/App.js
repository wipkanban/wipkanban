import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import Task from './components/Modal/Task';
import {connect} from 'react-redux';
import { Route, Switch,Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
    return state.columns
};
const App = ({openModal}) => {
    
    if(!window.localStorage.getItem('user')){
       return <Redirect to="/login" />
    }

    return(
        <div>
            <BoardContainer/>
            {openModal && <Task />}
        </div>
    )
}

export default connect(mapStateToProps)(App);
