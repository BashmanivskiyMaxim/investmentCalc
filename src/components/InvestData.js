import React, { createContext, useState } from "react";

export const InvestDataContext = createContext();

export const InvestDataProvider = ({ children }) => {
  const [investData, setInvestData] = useState([]);

  const updateInvestData = (data) => {
    setInvestData(data);
  };

  return (
    <InvestDataContext.Provider value={{ investData, updateInvestData }}>
      {children}
    </InvestDataContext.Provider>
  );
};