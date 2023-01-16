import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

initializeApp({
  apiKey: "AIzaSyAQzOYMd0-Qv0No_yQHIIvLZ-SZb2B3AbM",
  authDomain: "doelsnitz7.firebaseapp.com",
  projectId: "doelsnitz7",
  storageBucket: "doelsnitz7.appspot.com",
  messagingSenderId: "350417517685",
  appId: "1:350417517685:web:02f759a1cf192f18b04c3c",
  measurementId: "G-471L8XTQNY"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
