import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink/NavLink';
import Logo from '../img/Logo';
import './Navbar.css';

class Navbar extends Component {

	componentDidMount() {
		window.addEventListener('scroll', function(e){
			if(!document.getElementById('drawer').classList.contains('open'))
			{
				var navbar = document.getElementById('navbar');
				var drawer = document.getElementById('drawer');
				if(window.scrollY > navbar.offsetHeight && drawer.className !== 'open'){
					navbar.classList.add('scrolled');
				} else if (navbar.classList.contains('scrolled')){
					navbar.classList.remove('scrolled');
				}
			}
		});
	}
	handleHomeClick() {
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
			{url:'', label: 'EWGA Info', sublinks: [
				{url: '/about', label: 'About Us'},
				{url: '/membershipApplication', label: 'Membership Application'},
				{url: '/board', label: 'Board of Directors'},
				{url: '/committees', label: 'Committees'},
				{url: '/rules', label: 'Rules'}
			]},
			{url:'', label: 'Events', sublinks: [
				{url: '/9holeEvent', label: '9-Hole Event Schedule'},
				{url: '/9holeMatch', label: '9-Hole Math Play Event'},
				{url: '/18holeEvent', label: '18-Hole Event Schedule'},
				{url: '/clubChamp', label: 'Club Championship'},
				{url: '/dayTrip', label: 'Day Trip Golf Outing'},
				{url: '/guestDay', label: 'Guest Day/Invitational'},
				{url: '/leaguePlay', label: 'League Play Team Event'},
				{url: '/ringers', label: 'Ringers Event'}
			]},
			{url:'', label: 'Policies', sublinks: [
				{url: '/ewga', label: 'EWGA'},
				{url: '/edinburghusa', label: 'Edinburgh USA'},
				{url: '/handicap', label: 'Handicap Info'}
			]},
			{url:'/members', label: 'Membership Roster'},
			{url:'/bulletin', label: 'Bulletin Board'},
			{url:'/links', label: 'Links'}
		];
		var linkList = links.map((link, i) => <NavLink url={link.url} label={link.label} sublinks={link.sublinks} key={i} />);
		return (
			<nav className="Navbar" id="navbar">
				<div className="left-nav">
					<Link to="/" className="home-link" onClick={this.handleHomeClick}>
						<Logo />
					</Link>
				</div>
				<div className="right-nav">
					{linkList}
				</div>
			</nav>
		);
	}
}

export default Navbar;