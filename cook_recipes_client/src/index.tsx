import * as React from "react";
import * as ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App"
import { Provider } from "react-redux";

// !!!
import { BrowserRouter } from "react-router-dom";

import "@redux-devtools/extension";

import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";
import reducer from "./reducers";
import { logging } from "./middlewares/logging"

const rdeFunc = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
// const rdeFuncEx  = rdeFunc && rdeFunc();

const enhancer = compose(
    applyMiddleware(logging), 
    rdeFunc && rdeFunc()
);

const store = createStore(reducer, undefined, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById("root")
);