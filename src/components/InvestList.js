import React from "react";
import List from "@mui/material/List";
import InvestItem from "./InvestItem";
import { useContext } from "react";
import { InvestDataContext } from "./InvestData";

const InvestList = () => {
  const { investData } = useContext(InvestDataContext);

  console.log(investData);

  let currentSavings = +investData.current;
  let resCalculation = [];
  for (let i = 1; i < +investData.duration + 1; i++) {
    const yearlyInterest = currentSavings * (+investData.expected / 100);
    currentSavings += yearlyInterest + +investData.yearly;
    resCalculation.push({
      year: i,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: +investData.yearly,
    });
  }
  console.log(resCalculation);
  return (
    <List sx={{ p: 1.5, m: 1 }}>
      {resCalculation.map((data) => (
        <InvestItem key={data.year} props={data} initialInvestment={+investData.current}/>
      ))}
    </List>
  );
};

export default InvestList;
