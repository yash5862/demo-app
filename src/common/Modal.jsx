import React from "react";
import "./Modal.css";

const Modal = ({ children, setOpenModal }) => {
  return <div className="modal_bg">{children}</div>;
};

export default Modal;
