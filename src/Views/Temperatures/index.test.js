import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { AppTempCard } from "../../Components";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render AppCard information in F", () => {
  act(() => {
    render(
      <AppTempCard
        unit="F"
        item={{
          dateTime: "08-09-2021",
          aveTemp: 64.03,
          maxTemp: 71.55,
          minTemp: 52.52,
          aveHumidity: 71,
          aveFL: 63.52,
        }}
      />,
      container
    );
  });

  expect(container.querySelector(".MuiTypography-h4").textContent).toEqual(
    "09 Aug 2021"
  );

  expect(container.querySelector(".MuiTypography-h5").textContent).toEqual(
    "64.03°FFeels Like 63.52°F"
  );
});

it("should render AppCard information in C", () => {
  act(() => {
    render(
      <AppTempCard
        unit="C"
        item={{
          dateTime: "08-09-2021",
          aveTemp: 64.03,
          maxTemp: 71.55,
          minTemp: 52.52,
          aveHumidity: 71,
          aveFL: 63.52,
        }}
      />,
      container
    );
  });

  expect(container.querySelector(".MuiTypography-h4").textContent).toEqual(
    "09 Aug 2021"
  );

  expect(container.querySelector(".MuiTypography-h5").textContent).toEqual(
    "17.79°CFeels Like 17.51°C"
  );
});
