import React from "react";
/*
  Browser DOM me React inject karne ke liye
*/
import ReactDOM from "react-dom/client";

/*
  Redux Provider import kiya

  Kyun?
  Pure app ko Redux access dene ke liye

  Agar nahi hota:
  Redux state access nahi hoti
*/
import { Provider } from "react-redux";

/*
  BrowserRouter import kiya

  Kyun?
  Routing enable karne ke liye
*/
import { BrowserRouter } from "react-router-dom";

/*
  Main App component import kiya
*/
import App from "./App";

/*
  Redux store import kiya
*/
import store from "./redux/store";

/*
  Global CSS import ki
*/
import "./App.css";

/*
  Root render kiya
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/*
      Provider wrap kiya

      Kyun?
      Redux state pure app me share karne ke liye
    */}
    <Provider store={store}>

      {/*
        BrowserRouter wrap kiya

        Kyun?
        Route navigation enable karne ke liye
      */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);