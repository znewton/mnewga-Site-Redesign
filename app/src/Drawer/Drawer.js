import React, { Component } from 'react';
import { Link } from 'react-router';
import HamMenu from './HamMenu/HamMenu';
import './Drawer.css';

class Drawer extends Component {
	handleClick() {
		var ham = document.getElementById('ham-menu');
		var drawer = document.getElementById('drawer');
		var navbar =  document.getElementById('navbar');

		drawer.classList.remove('open');
		ham.classList.remove('open');
		if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
			navbar.classList.add('scrolled');
		} else if (navbar.classList.contains('scrolled')) {
			navbar.classList.remove('scrolled');
		}
	}
	render() {
		var links = [
			{url:'/about', label: 'EWGA Info'},
			{url:'/events', label: 'Events'},
			{url:'/policies', label: 'Policies'},
			{url:'/members', label: 'Membership Roster'},
			{url:'/bulletin', label: 'Bulletin Board'},
			{url:'/links', label: 'Links'}
		];
		var linkList = links.map((link, i) => <Link to={link.url} key={i} onClick={this.handleClick.bind(this)}>{link.label}</Link>);
		return (
			<div className="Drawer">
				<HamMenu/>
				<nav id="drawer">
					{linkList}
				</nav>
			</div>
		);
	}
}

export default Drawer;