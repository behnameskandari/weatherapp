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

import Image from "../../Assets/imgaes/munich.jpg";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "200px",
  },
  blur: {
    background: `url(${Image}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    filter: "blur(8px)",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    width: "200px",
    height: "100%",
    zIndex: 1,
  },
  title: {
    fontSize: 18,
  },
  desc: {
    marginBottom: 14,
  },
});
function AppCityInfo({ name, sunrise, sunset }) {
  const classes = useStyles();

  const getTime = (time)=>{

    return format(new Date(time * 1000), "HH:mm:ss")
  }

  return (
    <Card boxShadow={0} className={classes.root} variant="elevation">
      <div className={classes.blur}></div>

      <CardContent className={classes.overlay}>
        <Typography variant="h2" component="h2">
          {name}
        </Typography>
        <Grid container>
          <Box mr={4}>
            <Typography className={classes.title} variant="h5" component="h2">
              SUNRISE
            </Typography>
            <Typography className={classes.desc} color="textSecondary">
              {getTime(sunrise)}
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.title} variant="h5" component="h2">
              SUNSET
            </Typography>
            <Typography className={classes.desc} color="textSecondary">
            {getTime(sunset)}

            </Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export { AppCityInfo };
