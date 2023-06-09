import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle]=useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
    //USe this for One State Approach,Brings the snapshot of the state 
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Use this if state depends on prev snapshot
    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredTitle:event.target.value}
    // })
    // console.log(userInput.enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // console.log(userInput.enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    // console.log(userInput.enteredDate);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const taskData={
      title: enteredTitle,
      amount: +enteredAmount, //to change to integer
      date: new Date(enteredDate)
    }
    props.onExpenseData(taskData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  }

  const onCancelHandler=()=>{
    props.cancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2050-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={onCancelHandler}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
