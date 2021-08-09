import { GET_WEATHER, WEATHER_LIST_SUCCESS, WEATHER_LIST_ERROR } from "./types";

const INIT_STATE = {
  loading: true,
  list: null,
  city: null,
  error: null,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, loading: true };

    case WEATHER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.items,
        city: action.payload.city,
      };

    case WEATHER_LIST_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return { ...state };
  }
}
