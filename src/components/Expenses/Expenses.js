import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setYear] = useState(2022);

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses Filter Change Handler!");
    console.log(selectedYear);
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <FilterExpense
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
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
