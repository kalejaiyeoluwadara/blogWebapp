import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
import { motion, AnimatePresence } from "framer-motion";

function AppProvider({ children }) {
  const [active, setActive] = useState("home");
  const setPage = (page) => {
    setActive(page);
  };
  return (
    <AppContext.Provider
      value={{
        setPage,
        active,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
