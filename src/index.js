/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import App from "./app/App";
import "./index.css";

const render = () => {
	ReactDOM.render(
		<App state={store.getState()} dispatch={store.dispatch} />,
		document.getElementById("root")
	);
};
render();

store.subscribe(render);
