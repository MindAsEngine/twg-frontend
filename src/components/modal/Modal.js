import Modal from "react-modal";
import { useState } from "react";
import "./modal.scss";
import React from "react";

// Инфа, которую надо вставить в модалку принимается в props
//
//   content - контент модального окна
//  open - кнопка открытия для модалки
//  close - кнопка закрытия для модалки
//  show - статус модалки (показывает или нет)

// https://reactcommunity.org/react-modal/styles/transitions/  -  документация modalki

// style пишем стили нашего блока передается из props.style

// Стили записываются так
// content - стиль для тела модалки
// overlay - стиль для окружения: затемнения, заземления и исчезновения

// const customStyles = {
//   content: {
//     color: "red",
//   },
// };

// Пример того как прокидываем стили и саму модалку
/* <ModalComponent
    open={<>Open</>}
    close={<>Close</>}
    content={<>Lorem, ipsum dolor.</>}
    style={customStyles}
  /> */

// function ModalComponent(props) {
//   console.log(props);
//   const [state, setState] = useState({
//     modalShow: props.show,
//   });

//   function closeModal() {
//     setState({ ...state, modalShow: false });
//   }
//   console.log(state.modalShow);

//   return (
//     <Modal
//       closeTimeoutMS={500}
//       isOpen={props.show}
//       onRequestClose={closeModal}
//       style={{
//         overlay: {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//         },
//         content: {
//           maxWidth: "512px",
//           margin: "223px auto 0",
//         },
//       }}
//     >
//       <button onClick={closeModal}>Закрыть</button>
//       <div>щз</div>
//     </Modal>
//   );
// }

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: props.show,
    };
  }
  closeModal() {
    this.setState({ modalShow: false });
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
            maxWidth: "512px",
            margin: "223px auto 0",
          },
        }}
      >
        <button onClick={this.closeModal.bind(this)}>Закрыть</button>
        <div>щз</div>
      </Modal>
    );
  }
}

export default ModalComponent;
