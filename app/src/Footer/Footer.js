import React, { Component } from 'react';
import Logo from '../img/Logo';
import './Footer.css';

class Footer extends Component {
	render() {
		var socialLinks = [
			{url: '#', label: 'Sponsor #1'},
			{url: '#', label: 'Sponsor #2'},
			{url: '#', label: 'Sponsor #3'},
			{url: '#', label: 'Sponsor #4'},
			{url: '#', label: 'Sponsor #5'},
			{url: '#', label: 'Sponsor #6'},
			{url: '#', label: 'Sponsor #7'},
			{url: '#', label: 'Sponsor #8'},
			{url: '#', label: 'Sponsor #9'},
			{url: '#', label: 'Sponsor #10'},
			{url: '#', label: 'Sponsor #11'},
			{url: '#', label: 'Sponsor #12'},
			{url: '#', label: 'Sponsor #13'},
		];
		var socialLinkList = socialLinks.map((link, i) => <a href={link.url} key={i}>{link.label}</a>);
		return (
			<footer className="Footer" id="footer">
				<div className="footer-section footer-info">
					<a href="/"><Logo/></a>
					<a href="mailto:tbarrymn@gmail.com">tbarrymn@gmail.com</a>
				</div>
				<div className="footer-section footer-sponsors">
					{socialLinkList}
				</div>
			</footer>
		);
	}
}

export default Footer;