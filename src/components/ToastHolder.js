/* eslint-disable react/prop-types */
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

import React, { useContext, useState } from "react";

import { Context } from "../context/CartContext";


function ToastHolder(_props) {
  const { toastArray } = useContext(Context);

  return (
  
    <ToastContainer position="bottom-end" sx={{}} className="p-3">
      {toastArray.map((val, key) => (
        <ToastItem key={key} item={val} />
      ))}
    </ToastContainer>
   
  );
}

export default ToastHolder;

export const ToastItem = (props) => {
  const [show, setShow] = useState(true);
  const { onTostRemove } = useContext(Context);
  return (
    <Toast
      onClose={() => {
        setShow(false);
        onTostRemove(props.item.id);
      }}
      show={show}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="me-auto">{props.item.title}</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>Added successfully</Toast.Body>
    </Toast>
  );
};
