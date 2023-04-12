import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const setEnteredExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelButton=()=>{
    setShowForm(false);
    console.log(showForm);
  }
  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onExpenseData={setEnteredExpenseData}
          cancel={cancelButton}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add new Expense
      </button>
    </div>
  );
};
export default NewExpense;
