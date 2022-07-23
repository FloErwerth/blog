import { ReactNode } from "react";
import * as React from "react";
import Modal from "../modal/modal";

const storage: Storage = localStorage;

const saveToStorage: Function = () =>
  storage.setItem(Consent.PROPERTY_NAME, "true");

const shouldPopup: Function = () => {
  const item = storage.getItem(Consent.PROPERTY_NAME);
  return item !== null && item === "true";
};

const handleCloseModal: Function = (setIsVisible: Function) => {
  setIsVisible(false);
};

enum Consent {
  PROPERTY_NAME = "jdc_conset",
}

const CookiePopupDefaultProps = {
  shouldPopup: shouldPopup(),
};

type CookiePopupType = ReactNode;

function CookiePopup(props: React.FC): CookiePopupType {
  const [isVisible, setIsVisible] = React.useState(!shouldPopup());
  return (
    <Modal
      modalVisible={isVisible}
      closeModal={() => handleCloseModal(setIsVisible)}
    >
      <div>
        <button onClick={() => saveToStorage()}>consent</button>
      </div>
    </Modal>
  );
}
CookiePopup.defaultProps = CookiePopupDefaultProps;

export default CookiePopup;
