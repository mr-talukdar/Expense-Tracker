import React from "react";
import Chart from "./Chart/Chart";

function ExpenseChart(props) {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "march", value: 0 },
    { label: "april", value: 0 },
    { label: "may", value: 0 },
    { label: "june", value: 0 },
    { label: "july", value: 0 },
    { label: "aug", value: 0 },
    { label: "sept", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for(const expenses of props.expenses){
    const expenseMonth=expenses.date.getMonth();
    chartDataPoints[expenseMonth].value +=expenses.amount;
  }

  return <Chart dataPoint={chartDataPoints}/>;
}

export default ExpenseChart;
