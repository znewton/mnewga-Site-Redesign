import React, { Component } from 'react';
import DateCard from '../../Components/DateCard/DateCard';

class NineHoleEventSchedule extends Component {
	render() {
		var events = [
			{
				date: 'April 16',
				name: 'Random Draw',
				urgent: 'Spring Meeting',
				url: 'https://docs.google.com/spreadsheets/d/1vTllduK4-2AzfAv-BuyNAO-8DelOW5YbiHjYBEFfP2U/edit?usp=sharing'
			},
			{
				date: 'April 19',
				name: 'Cry Baby',
				url: 'https://docs.google.com/spreadsheets/d/1KOXqSDMABnQkFF8UEIQ2pQiOst8_1vWRQNmf4OnCXbM/edit?usp=sharing'
			},
			{
				date: 'April 26',
				name: '3 Part Golf',
				url: 'https://docs.google.com/spreadsheets/d/10ORh-ps7RDpT4sOEEPi8zBe5XpUUEOZMj8Nvzm6UAzo/edit?usp=sharing'
			},
			{
				date: 'May 3',
				name: 'Low Net',
				url: 'https://docs.google.com/spreadsheets/d/1Yl1ywjGU_35PzbVTmUqVvJdSNjPw_T5PVs8Bt06lA4o/edit?usp=sharing'
			},
			{
				date: 'May 10',
				name: 'Net Stableford',
				url: 'https://docs.google.com/spreadsheets/d/1hqoIpu2RuYp_fYf1ura74dm1UpwxtDCbOivp1D-3db0/edit?usp=sharing'
			},
			{
				date: 'May 17',
				name: '2 PersonBest Ball ',
				description: 'Pick your partner',
				url: 'https://docs.google.com/spreadsheets/d/1xLMAkWrxgyn5gY1Niup0bNQDXN8Bv_WrLqbcq0yJ84A/edit?usp=sharing'
			},
			{
				date: 'May 24',
				name: 'Blind Six',
				urgent: 'Shotgun - 6:00PM',
				url: 'https://docs.google.com/spreadsheets/d/1NuRA3YzjNi2Z6dWPrUeY1ZIhmAiVvkYoEQG8L9lkX58/edit?usp=sharing'
			},
			{
				date: 'May 31',
				name: 'Net Skins',
				url: 'https://docs.google.com/spreadsheets/d/1zEarpuTwRpIqrzMdO93oLedskIb8N_nCQ-VYGOQVkq4/edit?usp=sharing'
			},
			{
				date: 'June 7',
				name: 'Skills Challenge',
				url: 'https://docs.google.com/spreadsheets/d/14PqEh_WU-ftK9xpTvGpIKlPw5VKIIbbV0cPIQKiN-dk/edit?usp=sharing'
			},
			{
				date: 'June 14',
				name: 'Low Net',
				url: 'https://docs.google.com/spreadsheets/d/1lgJuQUQJRZQtyY_uekoNmV7JlXPcyjZl9glfJ28sWfA/edit?usp=sharing'
			},
			{
				date: 'June 21',
				name: 'Least Putts',
				url: 'https://docs.google.com/spreadsheets/d/1lgJuQUQJRZQtyY_uekoNmV7JlXPcyjZl9glfJ28sWfA/edit?usp=sharing'
			},
			{
				date: 'June 28',
				name: 'Yellow Ball Team (Net)',
				url: 'https://docs.google.com/spreadsheets/d/1Ji8fT4PT8C85tiLMOwycBJXYLGMnqJkjrpJR4q_SScQ/edit?usp=sharing'
			},
			{
				date: 'July 5',
				name: 'Red, White, and Blue (Net)',
				url: 'https://docs.google.com/spreadsheets/d/1nzwJtAzsfPpjsGMrQPA3KiK42F4SeLiFVcuIBj7Lv5w/edit?usp=sharing'
			},
			{
				date: 'July 12',
				name: 'Guess your Score',
				description: 'Member Appreciation Night',
				urgent: 'Shotgun - 5:30PM',
				url: 'https://docs.google.com/spreadsheets/d/18YUlLkt2qqD9_TclaZxLJ1DS5hFBDoG7MqSuLzllO84/edit?usp=sharing'
			},
			{
				date: 'July 19',
				name: 'Low Gross/Low Net',
				urgent: 'Shotgun - 6:30PM',
				url: 'https://docs.google.com/spreadsheets/d/1MYxDXJeJFyQzSsOvNIfqhdOnibrNNobSA9VXb3tqKAY/edit?usp=sharing'
			},
			{
				date: 'July 26',
				name: 'Cry Baby',
				url: 'https://docs.google.com/spreadsheets/d/1_ld7vBBOFlTGmuXbFlAwXJ8X-qUgGE2YuIm_JeBidas/edit?usp=sharing'
			},
			{
				date: 'Aug 2',
				name: 'Club Championship - Round 1',
				url: 'https://docs.google.com/spreadsheets/d/1SzMr4iwwFOKt1FYWQB595x7zN-M-bkx7I3vzHT3Qhcc/edit?usp=sharing'
			},
			{
				date: 'Aug 9',
				name: 'Club Championship - Round 2',
				url: 'https://docs.google.com/spreadsheets/d/1xs_AZt2TNw4jokmin2krqdnjIc9zGcZqGsK7EmMojuk/edit?usp=sharing'
			},
			{
				date: 'Aug 16',
				name: 'EWGA Olympics',
				urgent: 'Shotgun - 6:00PM',
				url: 'https://docs.google.com/spreadsheets/d/1fUKyNCtJu_9VhSx31bwY1DwiwGGRHQOsBAOKYyB9MFE/edit?usp=sharing'
			},
			{
				date: 'Aug 23',
				name: 'Blind Six',
				urgent: 'Cancelled - Event Moved to 9/6',
				url: ''},
			{
				date: 'Aug 29',
				name: '3 Part Golf',
				url: 'https://docs.google.com/spreadsheets/d/1Lca5YsNsHUWI9qSRdORz32hAxJxf-SHDi6NfW6O7Lgw/edit?usp=sharing'
			},
			{
				date: 'Sept 6',
				name: 'Blind Six',
				url: 'https://docs.google.com/spreadsheets/d/1WS_V3easEEqLdkO9RN0j4CKfCsDiqZaMO05TbMxKKpk/edit?usp=sharing'
			},
			{
				date: 'Sept 13',
				name: 'Proximity Shootout',
				description: '(Open to All League Members)',
				urgent: 'Fall Meeting',
				url: 'https://docs.google.com/spreadsheets/d/1rm4XoLWa7N1b7f6dZ90KWMbAV57R2j3CMdPb80zIV0k/edit?usp=sharing'
			},
			{
				date: 'Sept 20',
				name: 'Open Tee Times',
				url: 'https://docs.google.com/spreadsheets/d/1e2Ey_oN0xRdL6UL8ldnxu6eT4bdg4_ZJGiYwQvGw_mE/edit?usp=sharing'
			}
		];
		var eventsPrint = events.map((event, i) => (
			<DateCard date={event.date} name={event.name} description={event.description} urgent={event.urgent} url={event.url} key={i} />
		));
		return(
			<article>
				<h2>2016 EWGA 9 HOLE EVENT SCHEDULE (subject to change)</h2>
				<p>
					Event Committee Chairs:  Kelly Johnson and Mary Kay Ludewig
				</p>
				<p>
					Each week, Pro Shop certificates or ‘chits’ are awarded to winners in each event.
				</p>
				<p>
					Participant's <strong>scorecards must be signed and attested</strong> to be eligible for chits.
				</p>
				<p>
					Click on a <strong>date</strong> for Tee Time Sign Up - Two events are open to signups at all times.  Signup Sheets
					close Monday early AM before event, must contact Pro Shop after that to cancel or signup.  Winner's
					List will be available 1 week later on the same Link.
				</p>
				{eventsPrint}
			</article>
		);
	}
}

export default NineHoleEventSchedule;