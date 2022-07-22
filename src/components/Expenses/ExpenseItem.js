import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__information">
        <h2>{props.title}</h2>
        <div className="expense-item__cost">$ {props.cost}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
