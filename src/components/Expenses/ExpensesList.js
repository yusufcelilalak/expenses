import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__no-expense">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          cost={expense.cost}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
