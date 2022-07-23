import "./NewExpenseItem.css";
import Card from "../UI/Card";
import NewExpenseForm from "./NewExpenseForm";

function NewExpenseItem(props) {
  const addExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.floor(Math.random() * 1000000).toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense-item">
      <NewExpenseForm onAddExpenseData={addExpenseDataHandler} />
    </Card>
  );
}

export default NewExpenseItem;
