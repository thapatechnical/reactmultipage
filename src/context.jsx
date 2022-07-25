// create a context  (warehouse) ✅
// provider
// consumer / useContext

import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ fname: "vinod", age: "28" }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
