import React, { Component } from 'react';
import { Link } from 'react-router';
import './NavLink.css';

class NavLink extends Component {
	handleMouseEnter(e) {
		e.target.closest('.dropdown').classList.add('open');
	}
	handleMouseLeave(e) {
		e.target.closest('.dropdown').classList.remove('open');
	}
	render() {
		if(this.props.url !== '') {
			return (
				<Link to={this.props.url} activeClassName="active">{this.props.label}</Link>
			);
		} else {
			var dropdownLinks = this.props.sublinks.map((link, i) => (<Link to={link.url} key={i} activeClassName="active">{link.label}</Link>));
			return (
				<div className="dropdown"
					 onMouseEnter={this.handleMouseEnter}
					 onMouseLeave={this.handleMouseLeave}>
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