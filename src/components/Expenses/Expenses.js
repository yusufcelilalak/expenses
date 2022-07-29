import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import ExpensesList from "./ExpensesList";
import LineChart from "../Chart/LineChart";
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

  const charDataPoints = [
    { label: "Jan", cost: 0 },
    { label: "Feb", cost: 0 },
    { label: "Mar", cost: 0 },
    { label: "Apr", cost: 0 },
    { label: "May", cost: 0 },
    { label: "Jun", cost: 0 },
    { label: "Jul", cost: 0 },
    { label: "Aug", cost: 0 },
    { label: "Sep", cost: 0 },
    { label: "Oct", cost: 0 },
    { label: "Nov", cost: 0 },
    { label: "Dec", cost: 0 },
  ];

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    console.log(expenseMonth);
    charDataPoints[expenseMonth].cost += expense.cost;
  }

  return (
    <Card className="expenses">
      <FilterExpense
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <LineChart data={charDataPoints} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
