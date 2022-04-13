import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../public/stylesheets/style.css';
import Container from './container';
import React, { useState, useRef, useEffect } from 'react';

function PlayingBoard (props) {

    const playingCanvas = useRef(null)
    const [playingMap, setPlayingMap] = useState("Westdale.png")

    useEffect(()=> {
        const canvas = playingCanvas.current
        const context = canvas.getContext('2d')
    
                     
    })


    return (
        <div>
            <img ref={canvasImg} width="10" height="10" src={"./public/images/" + playingMap} style="visibility: hidden"></img>
            <canvas ref={playingCanvas} width="500" height="500"></canvas>
        </div>
    )

}