import React, { Component } from 'react';
import './DateCard.css';

class DateCard extends Component {
	render() {
		return (
			<a className="DateCard" href={this.props.url}>
				<div className="date">
					<div className="date-day">{this.props.date}</div>
					<div className="date-time">{this.props.time}</div>
				</div>
				<div className="event">
					<div className="event-name">{this.props.name}</div>
					<div className="event-description">{this.props.description}</div>
					<div className="event-urgent">{this.props.urgent}</div>
				</div>
			</a>
		);
	}
}

export default DateCard