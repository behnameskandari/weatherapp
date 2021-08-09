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
      return {
        time: `${getTime(item.dt_txt)} | ${getDeg(item.main.temp, unit)}`,
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

  return (
    <Paper data-testid="chart">
      <Chart data={getData()}>
        <ArgumentAxis />
        <ValueAxis max={8} />
        <BarSeries valueField="population" argumentField="time" />
        <Title text={getDate(date)} />
        <Animation />
      </Chart>
    </Paper>
  );
}

export { AppChart };
