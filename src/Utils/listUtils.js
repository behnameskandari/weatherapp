import { format, isEqual } from "date-fns";

const getAve = (data) => {
  const itemsCnt = data.length;

  let sumTemp = 0;
  let minTemp = 0;
  let maxTemp = 0;
  let sumHumidity = 0;
  let sumFL = 0;

  data.forEach((d) => {
    sumTemp += d.main.temp;

    if (minTemp === 0 || minTemp > d.main.temp_min) minTemp = d.main.temp_min;
    if (maxTemp < d.main.temp_max) maxTemp = d.main.temp_max;

    sumHumidity += d.main.humidity;
    sumFL += d.main.feels_like;
  });

  return {
    aveTemp: sumTemp / itemsCnt,
    minTemp,
    maxTemp,
    aveHumidity: sumHumidity / itemsCnt,
    aveFL: sumFL / itemsCnt,
  };
};

export const getListByDayWithAverages = (list) => {
  const Data = getListByDay(list);

  const newDate = Data.map((e) => {
    return {
      ...e,
      ...getAve(e.data),
    };
  });
  return newDate;
};

export const getListByDay = (list) => {
  const Data = [];
  let Day = {};

  list.forEach((element, index) => {
    const stDateTime = element.dt_txt.replace(/ /g, "T") + "Z";
    const dateTime = format(new Date(stDateTime), "yyyy-MM-dd");

    if (isEqual(new Date(Day.dateTime), new Date(dateTime))) {
      Day = {
        ...Day,
        data: [
          ...Day?.data,
          {
            ...element,
          },
        ],
      };
    } else {
      if (Object.keys(Day).length > 0) {
        Data.push(Day);
      }
      Day = {
        dateTime,
        data: [
          {
            ...element,
          },
        ],
      };
    }

    if (index === list.length - 1) {
      Data.push(Day);
    }
  });
  return Data;
};
