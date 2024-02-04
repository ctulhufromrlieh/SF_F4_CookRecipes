import * as React from "react";
import * as ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./components/App"
import { Provider } from "react-redux";

// !!!
import { BrowserRouter } from "react-router-dom";

import "@redux-devtools/extension";

// import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux";


ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>, 
    document.getElementById("root")
);