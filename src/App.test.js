import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
 
import App from "./App";

test("loading is shown while API request is in progress", async () => {
  render(<App />);
  const loading = screen.getByTestId("loading");

  expect(loading).toBeInTheDocument();

  waitForElementToBeRemoved(() => screen.getByTestId("loading"));
});
