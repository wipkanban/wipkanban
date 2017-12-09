import React from "react";
import PropTypes from 'prop-types';

class Modal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            open: true,
            class: 'show'
        }
    }

    render() {

        return (
            <div>
                <div className="modal-backdrop fade show"></div>
                <div
                    className="modal fade show"
                    id="modalTarefa"
                    role="dialog"
                    data-idtarefa="513"
                    aria-hidden="false"
                    style={{
                    display: "block"
                }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div id="modal-is-dragover"></div>
                            <div className="modal-header text-right">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    <span role="close-button" aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

Modal.propTypes = {
    children: PropTypes.object
}

export default Modal;