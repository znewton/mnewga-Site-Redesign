import React, { Component } from 'react';
import './ContactCard.css';
import ContactPhotoDefault from '../../img/ContactPhoto.svg';

class ContactCard extends Component {
	render() {
		return (
			<div className="ContactCard">
				<div className="ContactCard-image">
					<img src={ContactPhotoDefault} alt="Default Contact"/>
				</div>
				<div className="ContactCard-info">
					<div className="position">{this.props.position}</div>
					<div className="name">{this.props.name}</div>
					<div className="email">
						<a href={'mailto:'+this.props.email}>{this.props.email}</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactCard;