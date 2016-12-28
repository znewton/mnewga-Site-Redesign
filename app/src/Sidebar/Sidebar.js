import React, { Component } from 'react';
import './Sidebar.css';
import Card from './Card/Card';

class Footer extends Component {
	render() {
		var cards = [];
		var cardList = cards.map((card, i) => <Card src={card} key={i} />);
		return (
			<section className="Sidebar" id="sidebar">
				<div className="sidebar-header">
					Get Involved!
				</div>
				<div className="sidebar-content">
					{cardList}
				</div>
			</section>
		);
	}
}

export default Footer;