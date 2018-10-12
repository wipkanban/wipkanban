// @flow
import * as React from "react";

type Props = {
  children: React.Node,
  title: string,
  onCloseModal: Function,
  allowClose: boolean
};

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onCloseModal(): void {
    let { onCloseModal } = this.props;

    onCloseModal();
  }

  render(): React.Node {
    let { allowClose } = this.props;

    let btnClose: React.Node = allowClose ? (
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

export default Modal;
