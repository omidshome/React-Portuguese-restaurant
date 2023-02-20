import { createContext, useState } from "react";

const Context = createContext({
  total: 0,
  setTotalState: () => {},
  sushi: 0,
  showModal: false,
  setShowModal: () => {},
});

export const ContextProvider = (props) => {
  const [totalState, setTotalState] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <Context.Provider
      value={{
        total: totalState,
        setTotalState: setTotalState,
        sushi: 0,
        showModal: showModal,
        setShowModal: setShowModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
