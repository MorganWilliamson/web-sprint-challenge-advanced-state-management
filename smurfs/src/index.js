import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//Redux
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Reducers
import { reducer } from "./store/reducers";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));
