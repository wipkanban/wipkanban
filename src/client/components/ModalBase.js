import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onCloseModal() {
    let { onCloseModal } = this.props;

    onCloseModal();
  }

  render() {
    let { allowClose } = this.props;

    let btnClose = allowClose ? (
      <button type="button" className="close">
        <span onClick={this.onCloseModal.bind(this)} className="text-white">
          &times;
        </span>
      </button>
    ) : (
      ""
    );

    return (
      <div>
        <div className="modal-backdrop fade show" />
        <div
          onClick={allowClose ? this.onCloseModal.bind(this) : () => {}}
          className="modal fade show"
          style={{
            display: "block"
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div id="modal-is-dragover" />
              <div className="modal-header bg-murrey ">
                <span className="text-white">{this.props.title}</span>
                {btnClose}
              </div>
              <div className="modal-body">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
  allowClose: PropTypes.bool
};

export default Modal;
