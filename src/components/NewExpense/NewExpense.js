import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

  const setEnteredExpenseData=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseData={setEnteredExpenseData}/>
    </div>
  );
};
export default NewExpense;
