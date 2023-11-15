import React from "react";
import { ListItem, ListItemText } from "@mui/material";

const InvestItem = ({ props, initialInvestment }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ListItem>
      <ListItemText primary={props.year} />
      <ListItemText primary={formatter.format(props.savingsEndOfYear)} />
      <ListItemText primary={formatter.format(props.yearlyInterest)} />
      <ListItemText
        primary={formatter.format(
          props.savingsEndOfYear -
            initialInvestment -
            props.year * props.yearlyContribution
        )}
      />
      <ListItemText
        primary={formatter.format(
          initialInvestment + props.yearlyContribution * props.year
        )}
      />
    </ListItem>
  );
};

export default InvestItem;
