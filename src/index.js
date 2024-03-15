import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async';
=======
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <HelmetProvider>
    <App />
    </HelmetProvider>
=======
    <App />
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
