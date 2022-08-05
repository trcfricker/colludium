//import { json } from 'express'; (note: node added this line and it broke the compiler, not sure why)
import React from 'react';
import './../stylesheets/style.css';
import { PrimaryEditingArea } from './p01primaryeditingarea.js';
import { MenuTopLevel } from './p01menutoplevel.js';
//import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';

function Container(props) {

	const [menuList, setMenuList] = useState([]);
	let jsxText;
	let blocks;

	useEffect (() => {
			fetch('/api/menus', {
			  method: 'GET',
			  headers: new Headers({
				  'Content-Type': 'application/json'
			  })
		 	 })
		  	.then(r => r.json().then(json => ({ ok: r.ok, status: r.status, json })))
			.then(response => {
				if (!response.ok || response.status !== 200) {
				  throw new Error(response.json.message);
				}
				else {
					setMenuList(response.json);	

					};
				})
			.catch(error => {
				console.log(error);
			  })
		},[]);		
		
		
		
		if (menuList.length != 0)
			{
			
			}


		console.log();

		return (
				<>
				<header>
				<div className="primary_menu">
					{menuList.map((item) => {
						return (
							<MenuTopLevel title={item.menu_title} shortcut={item.title_shortcut} items={item.menu_item} blocks={Math.max(...item.menu_item.map((item) => item.section))}>
							</MenuTopLevel>);
					})}
				</div>
				</header>
				<PrimaryEditingArea />
				</>
				);

			}

export { Container };
