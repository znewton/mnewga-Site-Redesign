import React, { Component } from 'react';
import ContactCard from '../Components/ContactCard/ContactCard';

class Committee extends Component {
	render() {
		var cards = [
			{position: 'Club Championship', name: 'Kelly Johnson', email: 'kellyjohnson55443@gmail.com'},
			{position: 'Day Trip', name: 'Theresa Barry', email: 'tbarrymn@gmail.com'},
			{position: 'Events - 18 Hole', name: 'Kelly Johnson', email: 'kellyjohnson55443@gmail.com'},
			{position: 'Events - 18 Hole', name: 'Mary Kay Ludewig', email: 'mludewig@comcast.net'},
			{position: 'Events - 9 Hole', name: 'Kelly Johnson', email: 'kellyjohnson55443@gmail.com'},
			{position: 'Events - 9 Hole', name: 'Mary Kay Ludewig', email: 'mludewig@comcast.net'},
			{position: 'Handicapping', name: 'Kelly Andrews', email: 'andrewskm06@gmail.com'},
			{position: 'MWPGA/MWGA Liason', name: 'Kelly Andrews', email: 'andrewskm06@gmail.com'}
		];
		var cardList = cards.map((card, i) => (
			<ContactCard position={card.position} name={card.name} email={card.email} key={i} />
		));
		return (
			<article>
				<h2>2016 EWGA Committees</h2>
				{cardList}
			</article>
		);
	}
}

export default Committee;
