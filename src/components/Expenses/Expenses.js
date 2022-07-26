import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setYear] = useState(2022);

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === selectedYear;
  });

  return (
    <Card className="expenses">
      <FilterExpense
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
