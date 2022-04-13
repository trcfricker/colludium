import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../public/stylesheets/style.css';
import Container from './container';
// import reportWebVitals from './reportWebVitals';


// Grab the state from a global variable injected into the server-generated HTML
// if (window.__PRELOADED_STATE__) {


const root = createRoot(document.getElementById('container'));
root.render(<Container />);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();