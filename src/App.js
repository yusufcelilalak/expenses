import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseItem from "./components/NewExpense/NewExpenseItem";

const INITIAL_EXPENSE = [
  {
    id: 1,
    title: "Cleaning Flat",
    cost: 40,
    date: new Date(2022, 6, 19),
  },
  {
    id: 2,
    title: "Flower",
    cost: 5.2,
    date: new Date(2022, 6, 13),
  },
  {
    id: 3,
    title: "New Table",
    cost: 60.5,
    date: new Date(2021, 6, 5),
  },
  {
    id: 4,
    title: "Burger from Cafe",
    cost: 8.45,
    date: new Date(2020, 6, 2),
  },
  {
    id: 5,
    title: "New TV",
    cost: 426.55,
    date: new Date(2019, 5, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenseItem onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
