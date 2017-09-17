import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/Task'

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal(event) {

            if (event.target.getAttribute('role') === 'dialog' || event.target.getAttribute('role') == 'close-button') {
                dispatch(actions.closeModal());
            }
        }
    }
};

const mapStateToProps = state =>{
    
    return {
        data:{...state.columns.modalData}
    }
}

const ModalTask = ({data,onCloseModal}) => {
    
    return (
        <div>
            <div className="modal-backdrop fade in"></div>
            <div
                onClick={onCloseModal}
                className="modal fade in"
                tabIndex="-1"
                role="dialog"
                style={{
                display: "block"
            }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span onClick={onCloseModal} role="close-button" aria-hidden="true">&times;</span>
                            </button>
                            <h4 className="modal-title">{data.title}</h4>
                        </div>
                        <div className="modal-body">
                            <p>One fine body&hellip;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTask);