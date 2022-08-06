import {ReactNode, useCallback} from "react";
import * as React from "react";
import "./modal.scss";

interface ModalProps {
  children: ReactNode;
  modalVisible: boolean;
  closeModal: Function;
  hideClose?: boolean;
}


const Modal = ({
  children,
  modalVisible,
  closeModal,
  hideClose,
}: ModalProps) => {

  const handleCloseModal = useCallback(()=>{
    closeModal();
  }, [closeModal])

  return modalVisible ? (
    <div className={"modal-container"} onClick={handleCloseModal}>
      <div className={"modal"}>
        <div className={"modal-selection"}>
          {hideClose ? (
            <></>
          ) : (
            <div
              className={"modal-return"}
              onClick={handleCloseModal}
            >
              Return
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
