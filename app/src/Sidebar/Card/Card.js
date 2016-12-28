import React, { Component } from 'react';
import './Card.css';

class Footer extends Component {
	render() {
		var card = this.props.src;
		return (
			<div className="Card">
				{card}
			</div>
		);
	}
}

export default Footer;