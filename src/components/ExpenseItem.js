import ExpenseDate from "./ExpenseDate";
import { useState } from "react"; //states import
import "./Expenseitem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //States Logic
  

  const clickHandler = () => {
    setTitle("Updated");
    console.log("clicked!");
  };

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}

export default ExpenseItem;
