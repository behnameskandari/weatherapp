import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

import { format } from "date-fns";
import { getDegWU, getDeg } from "../../Utils";

function AppChart({ date, data, unit }) {
  const getData = () => {
    return data.map((item) => {
      const stDateTime = item.dt_txt.replace(/ /g, "T") + "Z";
      return {
        time: `${getTime(stDateTime)} | ${getDeg(item.main.temp, unit)}`,
        population: getDegWU(item.main.temp, unit),
      };
    });
  };

  const getDate = (date) => {
    return format(new Date(date), "dd MMM y");
  };
  const getTime = (date) => {
    return format(new Date(date), "HH:mm");
  };

  const makeAxisLabel = () => {
    return (props) => {
      const { x, y } = props;
      return (
        <React.Fragment>
          <ArgumentAxis.Label
            transform={`rotate(-45 ${x + 20} ${y + 50})`}
            y={y + 50}
            x={x + 30}
            {...props}
          />
        </React.Fragment>
      );
    };
  };
  return (
    <Paper data-testid="chart">
      <Chart data={getData()}>
        <ArgumentAxis labelComponent={makeAxisLabel(data)} showTick={false} />
        <ValueAxis max={8} />
        <BarSeries valueField="population" argumentField="time" />
        <Title text={getDate(date)} />
        <Animation />
      </Chart>
    </Paper>
  );
}

export { AppChart };
