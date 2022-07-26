import "./NewExpenseItem.css";
import Card from "../UI/Card";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
import { Button } from "@mui/material";

function NewExpenseItem(props) {
  const [isClicked, setClicked] = useState(false);

  const addExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.floor(Math.random() * 1000000).toString(),
    };

    props.onAddExpense(expenseData);
    setClicked(false);
  };

  const buttonClickHandler = () => {
    setClicked(true);
  };

  const stopEditingHandler = () => {
    setClicked(false);
  };

  return (
    <Card className="new-expense-item">
      {!isClicked && (
        <div className="new-expense-item__btn-div">
          <Button
            className="new-expense-item__btn"
            variant="contained"
            onClick={buttonClickHandler}
          >
            Add New Expense
          </Button>
        </div>
      )}
      {isClicked && (
        <NewExpenseForm
          onAddExpenseData={addExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
}

export default NewExpenseItem;
