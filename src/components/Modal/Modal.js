import React, { useContext } from "react";
import Context from "../store/Context";
import modalSyle from "./Modal.module.css";

export default function Modal() {
  const ctx = useContext(Context);
  return (
    <div
      className={`${modalSyle.modalBg}`}
      onClick={() => ctx.setShowModal(!ctx.showModal)}
    >
      <div
        className={`${modalSyle.modalCart}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Order List</h2>
        <hr />
        <div className={modalSyle.orderedItem}>
          <h3>Sushi</h3>
          <input
            type={"number"}
            min={0}
            value={ctx.total}
            className={`form-control ${modalSyle.inputBtn}`}
            onChange={(e) => ctx.setTotalState(e.target.value)}
          />
        </div>
        <hr />
        <div className={modalSyle.mBotton}>
          <button className="btn btn-warning">Order Now</button>
          <button
            className="btn btn-danger"
            onClick={() => ctx.setShowModal(!ctx.showModal)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
