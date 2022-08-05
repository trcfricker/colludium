import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import '../stylesheets/style.css';
import Container from './container.js';
import { MenuBlock } from './p01menublock.js';
import { useState, useRef, useEffect } from 'react';


function MenuTopLevel(props) {

    let start = props.shortcut-1;
    let finish = props.shortcut; 
  
  
    const blockList = () => {
                let blocks = []                
                let blockItems = [];
                
                
                
                for (let i=0; i < props.blocks; i++)
                        {
                        blocks[i] = <MenuBlock key={i} items={props.items.filter(item=>item.section==i+1)} block={i+1}></MenuBlock>
                        }
                //console.log(blocks);
                return blocks;
                }
    //let blockAgain = blockList();
    //console.log(blockAgain.map((item)=> {return (<MenuBlock block={item.block}></MenuBlock>)}));
    return (
 
        <>

            <div className='menu_item'>
                {start >= '0' && props.title.slice(0, start)}
                <span>{props.title.slice(start,finish)}</span>{finish <= props.title.length && props.title.slice(finish, props.title.length)}
            <div className="menu_list_container">
            <div className="menu_list">	
                {blockList()}
            </div></div></div>
        </>
    )
}

export { MenuTopLevel };

  //    {blockAgain.map((item)=> {return(<MenuBlock block={item.block}></MenuBlock>)})}