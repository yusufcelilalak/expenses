import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
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
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          cost={expense.cost}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
