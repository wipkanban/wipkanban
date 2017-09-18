import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/Task'
import Timer from './Timer'
import Markers from './Markers'
import Members from './Members'
import ContainerChecklists from './ContainerChecklists'
import Description from './Description'
import AttachmentsContainer from './AttachmentsContainer'
import Comments from './Comments'
import Menu from './Menu'

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal(event) {

            if (event.target.getAttribute('role') === 'dialog' || event.target.getAttribute('role') == 'close-button') {
                dispatch(actions.closeModal());
            }
        }
    }
};

const mapStateToProps = state => {

    return {
        data: {
            ...state.columns.modalData
        }
    }
}

const Task = ({data, onCloseModal}) => {
    
    return (
        <div>
            <div className="modal-backdrop fade in"></div>
            <div
                onClick={onCloseModal}
                className="modal fade in"
                id="modalTarefa"
                role="dialog"
                data-idtarefa="513"
                aria-hidden="false"
                style={{
                display: "block"
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div id="modal-is-dragover"></div>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                <span onClick={onCloseModal} role="close-button" aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <h3 className="modal-title">
                                <b>{data.title}</b>
                                <input
                                    type="text"
                                    className="form-control hide nomeTarefa"
                                    defaultValue={data.title}/>
                            </h3>

                            <i>criado por</i>
                            {data.createdby}<i>
                                na coluna
                            </i>{data.columnName}
                            <br/><br/>
                            <Menu />
                            <hr/>
                            <Timer />
                            
                            <div className="row" id="membrosEMarcadores">
                                <Members members={data.members} />
                                <Markers markers={data.markers} />
                            </div>
                            <ContainerChecklists />
                            <br/>
                            <Description />
                            <AttachmentsContainer />
                            <Comments comments={data.comments} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Task);