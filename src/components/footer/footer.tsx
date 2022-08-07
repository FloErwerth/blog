import * as React from "react";
import {useCallback, useState} from "react";
import "./footer.scss";
import Privacy from "../privacy/privacy";
import Imprint from "../imprint/imprint";
import Modal from "../modal/modal";
import {Endpoint, navigateTo} from "../../util/navigateTo";

const LABEL = "Florian Erwerth's Blog";
const modals = [<Privacy />, <Imprint />];

const handleNavigation = () => {
  navigateTo(Endpoint.About);
}

const footer = () => {
  const [modalContentIndex, setModalContentIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const handleOpenModal = useCallback((index: number) => {
    setModalContentIndex(index);
    setShowModal(true);
  }, [setModalContentIndex]);

  return (
    <div className={"footer"}>
      <div className={"footer-label"}>{LABEL}</div>
      <div className={"footer-content"}>
        <div onClick={() => handleOpenModal(1)} className={"footer-link"}>
          Imprint
        </div>
        <div
          className={"footer-link"}
          onClick={handleNavigation}
        >
          About
        </div>
      </div>

      {showModal ? (
        <div className={"footer-modal"}>
          <Modal modalVisible={showModal} closeModal={handleCloseModal}>
            {modals[modalContentIndex]}
          </Modal>
        </div>
      ) : null}
    </div>
  );
};

export default footer;
