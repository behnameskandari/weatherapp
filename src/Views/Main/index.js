import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Loading } from "..";
import { Temperatures } from "../Temperatures";

function Main() {
  const { loading } = useSelector((state) => state.weather);
  if (loading) {
    return <Loading />;
  }
  
  return (
    <Grid container spacing={3}>
      <Temperatures />
    </Grid>
  );
}

export { Main };
