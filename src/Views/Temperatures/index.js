import React, { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Grid,
  Button,
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppChart, AppCityInfo, AppTempCard } from "../../Components";

const useStyles = makeStyles({
  right: {
    float: "right",
    marginRight: "-17px",
  },
  left: {
    marginLeft: "-17px",
  },
});
function Temperatures({ callApi }) {
  const { city, list } = useSelector((state) => state.weather);
  const [unit, setUnit] = useState("F");
  const [selectedDate, setSelectedDate] = useState(null);
  const [page, setPage] = useState(0);
  const matches = useMediaQuery("(min-width:380px)");

  useEffect(() => {});

  const classes = useStyles();

  useEffect(() => {
    if (list.length > 0) {
      setSelectedDate(list[0]);
    }
  }, [list]);

  return (
    <>
      <Grid item xs={12}>
        <AppCityInfo
          name={city.name}
          sunrise={city.sunrise}
          sunset={city.sunset}
        />
      </Grid>

      <Grid item xs={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Unit</FormLabel>
          <RadioGroup
            row
            value={unit}
            name="unit"
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          >
            <FormControlLabel
              value="F"
              control={<Radio color="default" />}
              label="Fahrenheit"
            />
            <FormControlLabel
              value="C"
              control={<Radio color="default" />}
              label="Celsius"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="primary"
          onClick={() => {
            callApi();
          }}
          className={classes.right}
        >
          Refresh
        </Button>
      </Grid>

      <Grid item xs={12}>
        {page !== 0 && (
          <Button
            onClick={() => {
              setPage(page - 1);
            }}
            className={classes.left}
            color="primary"
          >
            <ArrowBack fontSize="large" />
          </Button>
        )}

        {list.length - 1 > page && (
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
            className={classes.right}
            color="primary"
          >
            <ArrowForward fontSize="large" />
          </Button>
        )}
      </Grid>

      {list.slice(page, page + (matches ? 3 : 1)).map((item) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AppTempCard onClick={setSelectedDate} unit={unit} item={item} />
          </Grid>
        );
      })}

      {selectedDate && (
        <Grid item xs={12}>
          <AppChart
            data={selectedDate.data}
            date={selectedDate.dateTime}
            unit={unit}
          />
        </Grid>
      )}
    </>
  );
}

export { Temperatures };
