import React, { useContext, useEffect, useState, useRef } from "react";
import Context from "../store/Context";
import "./Cart.css";

export default function Cart() {
  const ctx = useContext(Context);
  const [shouldBeRerendere, setShouldBeRerendere] = useState(ctx.total);
  const classManupolation = useRef();

  useEffect(() => {
    setShouldBeRerendere(ctx.total);
    classManupolation.current.classList.add("itemNumber");

    setTimeout(() => {
      classManupolation.current.classList.remove("itemNumber");
    }, 700);
  }, [ctx.total]);

  return (
    <div onClick={() => ctx.setShowModal(!ctx.showModal)}>
      <div
        style={{
          background: "rgb(128, 0, 0)",
          paddingTop: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "10px",
          cursor: "pointer",
        }}
        className={`me-5 rounded `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cart text-white me-3 d-none d-md-inline"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <span className="h6 text-white d-none d-sm-inline">Your Order</span>
        <span
          ref={classManupolation}
          onChange={() => setShouldBeRerendere(!shouldBeRerendere)}
          className={`badge bg-success ms-3 `}
        >
          {shouldBeRerendere}
        </span>
      </div>
    </div>
  );
}
