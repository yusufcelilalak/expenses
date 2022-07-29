import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import Card from "../UI/Card";

function LineChart(props) {
  const labels = [];
  const costs = [];

  for (const data of props.data) {
    labels.push(data.label);
    costs.push(data.cost);
  }

  return (
    <Card className="line-chart">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "",
              data: costs,
              fill: false,
              borderColor: "rgb(255, 199, 56)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        height={100}
        width={200}
      ></Line>
    </Card>
  );
}

export default LineChart;
