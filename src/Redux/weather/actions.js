import { GET_WEATHER, WEATHER_LIST_SUCCESS, WEATHER_LIST_ERROR } from "./types";

export const getWeatherList = () => ({
  type: GET_WEATHER,
});

export const getWeatherListSuccess = (items, city) => ({
  type: WEATHER_LIST_SUCCESS,
  payload: {
    items,
    city,
  },
});

export const getWeatherListError = (error) => ({
  type: WEATHER_LIST_ERROR,
  payload: {
    error,
  },
});
