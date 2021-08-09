import React from "react";
import { Provider } from "react-redux";
import { AppContainer } from "./Layouts";
import store from "./Redux/store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
