import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../stylesheets/style.css';
import Container from './container.js';
//import React, { useState, useRef, useEffect } from 'react';

function PrimaryEditingArea(props) {

    return (
        <main>
        <div className="primary_border">
            <div className="primary_editing_area" style={{caret: "underscore"}}>
              <cite style={{contenteditable: "true"}}>sdfsdf</cite>
                
            </div>
        </div>
    </main>
    )


}

export { PrimaryEditingArea };