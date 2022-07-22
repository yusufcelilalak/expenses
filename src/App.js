import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
      date: new Date(2022, 6, 5),
    },
    {
      id: 4,
      title: "Burger from Cafe",
      cost: 8.45,
      date: new Date(2022, 6, 2),
    },
    {
      id: 5,
      title: "New TV",
      cost: 426.55,
      date: new Date(2022, 5, 25),
    },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
