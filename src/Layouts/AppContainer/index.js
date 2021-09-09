import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import { WeatherApi } from "../../Apis";
import { getListByDayWithAverages } from "../../Utils";
import {
  getWeatherList,
  getWeatherListSuccess,
  getWeatherListError,
} from "../../Redux/weather/actions";
import { Main } from "../../Views";

function AppContainer() {
  const dispatch = useDispatch();

  const getDate = () => {
    dispatch(getWeatherList());
    WeatherApi.get({
      q: "Munich,de",
      cnt: 40,
      units: "imperial",
    }).then(({ error, response }) => {
      if (error) {
        dispatch(getWeatherListError(error.response?.statusText));
      } else if (response) {
        const Data = getListByDayWithAverages(response.list);
        dispatch(getWeatherListSuccess(Data, response.city));
      }
    });
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <Container spacing={3} maxWidth="lg">
      <Main
        callApi={getDate}
      />
    </Container>
  );
}

export { AppContainer };
