import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const maxValueArray = props.dataPoint.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...maxValueArray);

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
