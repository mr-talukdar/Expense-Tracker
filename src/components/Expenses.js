import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const onfilterChangeHandler = (prevYear) => {
    //setYear(prevYear);

    var value = prevYear.toString();
    setYear((year) => value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onFilterChanged={onfilterChangeHandler} />
        <ExpensesList data={filteredExpenses} filterValue={year} allData={props.items}/>
      </div>
    </div>
  );
}

export default Expenses;
