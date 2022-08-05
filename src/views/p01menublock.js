import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../stylesheets/style.css';
import { useState, useRef, useEffect } from 'react';
import { MenuItem } from './p01menuitem.js';

function MenuBlock(props) {

    return (
        <div className="menu_block" style={{gridTemplateColumns:"220px 90px"}}>
            {props.items.map((item)=>{return(<MenuItem title={item.title} shortcut={item.shortcut} shortcut_location={item.shortcut_location}></MenuItem>)})}
        </div>
    );
}
export { MenuBlock };