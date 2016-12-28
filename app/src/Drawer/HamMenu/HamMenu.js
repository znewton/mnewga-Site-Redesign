import React, { Component } from 'react';
import './HamMenu.css';

class HamMenu extends Component {
	componentDidMount() {
		window.addEventListener('scroll', function(e){
			if(!document.getElementById('drawer').classList.contains('open'))
			{
				var hammenu = document.getElementById('ham-menu');
				var navbar = document.getElementById('navbar');
				var drawer = document.getElementById('drawer');
				if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
					hammenu.classList.add('scrolled');
				} else {
					hammenu.classList.remove('scrolled');
				}
			}
		});
	}
	onClick() {
		var ham = document.getElementById('ham-menu');
		var drawer = document.getElementById('drawer');
		var navbar =  document.getElementById('navbar');
		if((' ' + ham.className + ' ').indexOf(' open ') === -1) {
			drawer.classList.add('open');
			ham.className = 'open';
			navbar.classList.add('scrolled');
		} else {
			drawer.classList.remove('open');
			ham.className = '';
			if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
				navbar.classList.add('scrolled');
			} else if (navbar.classList.contains('scrolled')) {
				navbar.classList.remove('scrolled');
			}
		}
	}

	render() {
		return (
			<div id="ham-menu" onClick={this.onClick}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		);
	}
}

export default HamMenu;