import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        cost={props.expenses[0].cost}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        cost={props.expenses[1].cost}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        cost={props.expenses[2].cost}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        cost={props.expenses[3].cost}
        date={props.expenses[3].date}
      />
      <ExpenseItem
        title={props.expenses[4].title}
        cost={props.expenses[4].cost}
        date={props.expenses[4].date}
      />
    </Card>
  );
}

export default Expenses;
