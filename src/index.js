import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './stylesheets/style.css';
import { Container } from './views/container.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

// import reportWebVitals from './reportWebVitals';


// Grab the state from a global variable injected into the server-generated HTML
// if (window.__PRELOADED_STATE__) {


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);
//ReactDOM.render(<Container />, document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();