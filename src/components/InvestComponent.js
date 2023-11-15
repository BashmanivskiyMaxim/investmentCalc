import React from "react";
import InvestForm from "./InvestForm";
import { InvestDataProvider } from "./InvestData";
import InvestList from "./InvestList";

const InvestComponent = () => {
  return (
    <div>
      <InvestDataProvider>
        <InvestForm />
        <InvestList />
      </InvestDataProvider>
    </div>
  );
};

export default InvestComponent;
