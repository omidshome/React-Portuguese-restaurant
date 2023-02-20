import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import LandingImage from "./assets/food.webp";
import FrontCard from "./components/FrontCard";
import MainOrderCard from "./components/order-card/MainOrderCard";
import Context from "./components/store/Context";
import Modal from "./components/Modal/Modal";

function App() {
  const ctx = useContext(Context);
  return (
    <div className="App">
      <Navbar />
      <img src={LandingImage} alt="Portuguese food" className="landingImg " />
      <FrontCard />
      <MainOrderCard />
      {ctx.showModal && <Modal />}
    </div>
  );
}

export default App;
