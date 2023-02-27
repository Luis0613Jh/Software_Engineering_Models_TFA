import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/layouts/index.css';
import Admin from './layouts/Admin';
import reportWebVitals from './reportWebVitals';
import { TaxiContextProvider } from "./context/TaxiContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaxiContextProvider>
      <Admin />
    </TaxiContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
