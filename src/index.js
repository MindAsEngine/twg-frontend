import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { peristed } from "./store/store";
import App from "./App";

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={peristed}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
