import "./NewExpenseForm.css";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function NewExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredCost, setCost] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      cost: enteredCost,
      date: new Date(enteredDate),
    };

    props.onAddExpenseData(expenseData);

    setTitle("");
    setCost("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__inputs">
        <div className="new-expense__control">
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            size="small"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <TextField
            fullWidth
            label="Cost"
            type="number"
            inputProps={{ min: 0.01, step: 0.01 }}
            variant="outlined"
            size="small"
            value={enteredCost}
            onChange={costChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <TextField
            fullWidth
            label="Date"
            type="date"
            inputProps={{ min: "2018-01-01", max: "2025-12-31" }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <Button
            fullWidth
            className="new-expense__control new-expense__control-btn"
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add Expense
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewExpenseForm;
