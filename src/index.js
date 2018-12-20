import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import initFirebaseAndStore from "./store/init";
import FirebaseCMSApp from "./views/AppView";
//import testConfig from "./testConfig";
const config = window.firestoreCMSConfig || {};

initFirebaseAndStore(config).then(store => {
  ReactDOM.render(
    <FirebaseCMSApp store={store} />,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
