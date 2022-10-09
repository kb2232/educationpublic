
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import App from './App';
import GlobalStyles from "./global-styles";

// if (process.env.REACT_APP_API_ENDPOINT_ENV !== "production") {
// 	const axe = require("react-axe");
// 	require("dotenv").config();
// 	axe(React, ReactDOM, 1000);
// }


const rootElement = document.getElementById("root");
const rootComponent = (
	<Provider store={Store}>
    <GlobalStyles />
    <App />
  </Provider>
);

if (rootElement && rootElement.hasChildNodes()) {
	hydrate(rootComponent, rootElement);
} else {
	render(rootComponent, rootElement);
}
