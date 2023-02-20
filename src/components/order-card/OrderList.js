import React, { useContext, useState, useRef } from "react";
import Context from "../store/Context";
import "./OrderList.css";
import clickSoundFile from "../../assets/clickSound.mp3";

export default function OrderList() {
  const clickSound = useRef();
  const ctx = useContext(Context);
  const [amount, setAmount] = useState(0);

  const onAdd = () => {
    ctx.setTotalState(ctx.total + amount);
    setAmount(0);
    clickSound.current.play();
  };

  return (
    <div>
      <div className="pos">
        <div>
          <h6>Suhi</h6>
          <p className="description">Finest fish and veggies</p>
          <h6>$22.99</h6>
        </div>
        <div>
          <span className="h6">Amount</span>
          <span>
            <input
              value={amount}
              type="number"
              min={0}
              max={10}
              className="ms-3 form-control"
              style={{ maxWidth: "60px" }}
              onChange={(event) => {
                setAmount(+event.target.value);
              }}
            />
          </span>
          <div>
            <button
              className="btn btn-warning mt-3 "
              style={{ margin: "auto" }}
              onClick={onAdd}
            >
              + Add
            </button>
            <audio ref={clickSound} src={clickSoundFile} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
