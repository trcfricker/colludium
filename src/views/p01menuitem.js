import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../stylesheets/style.css';
import { useState, useRef, useEffect } from 'react';

function MenuItem(props) {

    let start = props.shortcut_location-1;
    let finish = props.shortcut_location; 
  
    return (
        <>
        <div>{start >= '0' && props.title.slice(0, start)}
        <span>{props.title.slice(start,finish)}</span>{finish <= props.title.length && props.title.slice(finish, props.title.length)}</div><div>{props.shortcut}</div>
        </>   
        );
}
export { MenuItem };