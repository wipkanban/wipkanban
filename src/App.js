import React from 'react';
import BoardContainer from './components/board/BoardContainer';
import ModalTask from './components/board/ModalTask';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return state.columns
};
const App = ({openModal}) => {
    
    return(
        <div>
            <BoardContainer/>
            {openModal && <ModalTask />}
        </div>
    )
}

export default connect(mapStateToProps)(App);
