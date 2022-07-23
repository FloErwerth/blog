import { ReactNode, useState } from "react";
import * as React from "react";
import "./modal.scss";

interface ModalProps {
  children: ReactNode;
  modalVisible: boolean;
  closeModal: Function;
}

const handleCloseModal: Function = (closeModal: Function) => {
  closeModal();
};

const Modal = ({ children, modalVisible, closeModal }: ModalProps) => {
  return modalVisible ? (
    <div className={"modal-container"}>
      <div className={"modal"}>
        <div className={"modal-selection"}>
          <div
            className={"modal-return"}
            onClick={() => handleCloseModal(closeModal)}
          >
            Return
          </div>
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
