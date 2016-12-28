import React, { Component } from 'react';
import { Link } from 'react-router';
import './DrawerLink.css';

class NavLink extends Component {
	handleClick(e) {
		var dropdown = e.target.closest('.dropdown');
		if(dropdown.classList.contains('open'))
		{
			dropdown.classList.remove('open');
		} else {
			dropdown.classList.add('open');
		}
	}
	render() {
		if(this.props.url !== '') {
			return (
				<Link to={this.props.url} activeClassName="active" onClick={this.props.onClick}>{this.props.label}</Link>
			);
		} else {
			var dropdownLinks = this.props.sublinks.map((link, i) => (<Link to={link.url} key={i} activeClassName="active" onClick={this.props.onClick}>{link.label}</Link>));
			return (
				<div className="dropdown"
					 onClick={this.handleClick}>
					<a className="dropdown-label">{this.props.label}</a>
					<div className="dropdown-links">
						{dropdownLinks}
					</div>
				</div>
			);
		}
	}
}

export default NavLink;