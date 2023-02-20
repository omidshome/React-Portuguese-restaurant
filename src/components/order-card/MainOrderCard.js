import React from "react";
import "./MainOrderCard.css";
import OrderList from "./OrderList";

export default function MainOrderCard() {
  return (
    <div className="size ">
      <div>
        <OrderList />
        <OrderList />
      </div>
    </div>
  );
}
