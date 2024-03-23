import Modal from "react-modal";
import { useState } from "react";
import "./CallbackModal.scss";
import { ReactComponent as Cross } from "../../img/cross.svg";
import React from "react";
import FormCallback from "../forms/FormCallback";

class CallbackModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: props.show,
    };
  }
  closeModal() {
    this.setState({ modalShow: false });
    this.props.callBack(false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      this.setState({ modalShow: this.props.show });
    }
  }

  render() {
    return (
      <Modal
        closeTimeoutMS={500}
        isOpen={this.state.modalShow}
        onRequestClose={this.closeModal.bind(this)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: " 512px",
            maxHeight: "432px",
            height: "100%",
            margin: "223px auto 0",
            padding: "25px 32px",
          },
        }}
      >
        <div className="flex modalCallback">
          <div className="modalCallback__wrapper">
            <div className="modalCallback__title fw600 fs32 lh44 flex justif-ss-betw align-cent">
              <p>Заказать звонок</p>
              <button onClick={this.closeModal.bind(this)}>
                <Cross />
              </button>
            </div>
            <div className="modalCallback__subtitle fw400 fs24 lh32">
              Как мы можем с вами связаться?
            </div>
            <FormCallback />
          </div>
        </div>
      </Modal>
    );
  }
}

export default CallbackModal;
