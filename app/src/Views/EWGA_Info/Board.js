import React, { Component } from 'react';
import ContactCard from '../../Components/ContactCard/ContactCard';

class Board extends Component {
	render() {
		var cards = [
			{position: 'President', name: 'Theresa Barry', email: 'tbarrymn@gmail.com'},
			{position: 'Vice President', name: 'Mary Kay Ludewig', email: 'mludewig@comcast.net'},
			{position: 'Treasurer', name: 'Karen Komp', email: 'karen.komp@remarkgroup.com'},
			{position: 'Handicaps/MWGA', name: 'Kelly Andrews', email: 'andrewskm06@gmail.com'},
			{position: 'Secretary', name: 'Cathy Rogers', email: 'cathylr22@yahoo.com'},
			{position: 'Social', name: 'Patti Israelson', email: 'prshafer5@comcast.net'}
		];
		var cardList = cards.map((card, i) => (
			<ContactCard position={card.position} name={card.name} email={card.email} key={i} />
		));
		return (
			<article>
				<h2>2016 EWGA Board of Directors</h2>
				{cardList}
			</article>
		);
	}
}

export default Board;
