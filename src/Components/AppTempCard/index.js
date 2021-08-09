import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  Box,
} from "@material-ui/core";
import { format } from "date-fns";
import { getDeg } from "../../Utils";

const useStyles = makeStyles({
  root: {
    position: "relative",
    cursor: "pointer",
  },
  title: {
    fontSize: 16,
    marginTop: 25,
  },
  desc: {
    fontSize: 16,
  },
});
function AppTempCard({ item, unit, onClick }) {
  const { dateTime, aveTemp, maxTemp, minTemp, aveHumidity, aveFL } = item;

  const classes = useStyles();

  const getDate = (date) => {
    return format(new Date(date), "dd MMM y");
  };

  return (
    <Card
      onClick={() => {
        onClick(item);
      }}
      boxShadow={0}
      className={classes.root}
      variant="elevation"
    >
      <CardContent>
        <Typography variant="h4" component="h4">
          {getDate(dateTime)}
        </Typography>
        <Typography variant="h5" component="h4">
          {getDeg(aveTemp, unit)}
          <Typography className={classes.desc} color="textSecondary">
            Feels Like {getDeg(aveFL, unit)}
          </Typography>
        </Typography>
        <Grid container>
          <Box mr={5}>
            <Typography className={classes.title}>HIGH</Typography>
            <Typography className={classes.desc} color="textSecondary">
              {getDeg(maxTemp, unit)}
            </Typography>
          </Box>
          <Box mr={5}>
            <Typography className={classes.title}>LOW</Typography>
            <Typography className={classes.desc} color="textSecondary">
              {getDeg(minTemp, unit)}
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.title}>HUMIDITY</Typography>
            <Typography className={classes.desc} color="textSecondary">
              {`${aveHumidity.toFixed(2)}%`}
            </Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export { AppTempCard };
