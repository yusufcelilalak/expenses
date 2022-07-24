import "./FilterExpense.css";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function FilterExpense(props) {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="filter-expense">
      <div>Filter by Year</div>
      <div className="filter-expense__year-select">
        <FormControl size="small">
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            id="demo-simple-select"
            value={props.selected}
            label="Year"
            onChange={filterChangeHandler}
          >
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
            <MenuItem value={2025}>2025</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default FilterExpense;
