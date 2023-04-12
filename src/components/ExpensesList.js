import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  
  if (props.data.length > 0) {
    return(
      props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    )
  }
  if (props.filterValue === "All Time") {
    return( props.allData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
    )
  }
  return (
    <p className="expenses-list__fallback">No Expenses Found</p>
  );
};

export default ExpensesList;
