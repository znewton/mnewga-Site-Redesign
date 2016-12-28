import React, { Component } from 'react';
import { Link } from 'react-router';

class Rules extends Component {
	render() {
		var rules = [
			{
				title: 'Establish a Handicap',
				description: (
					<p>
						Establish a handicap. All scores played in Minnesota from April 1 to November 1must be posted.
						Off-season and out of state scores should be posted in the spring with the course rating and
						slope rating. After five 18-hole rounds or ten 9-hole rounds, you will have a handicap. Once you
						have established this handicap, you are required to adjust each score before posting it in
						accordance with the equitable stroke control (ESC) chart shown in the section titled HANDICAPS
						under the <Link to="/handicaps">events menu</Link>. If you have any questions contact Cathy Rogers
						at <a href="tel:6128680756">612-868-0756 </a> or <a href="mailto:cathylr22@yahoo.com">cathylr22@yahoo.com</a>.
					</p>
				)
			},
			{
				title: 'Follow Rules and Etiquette',
				description: (
					<p>
						Learn and follow the USGA Rules of Golf and Etiquette. If you do not know a rule, please ask or
						you can purchase the book “The Rules of Golf” in the Pro Shop. Be responsible for keeping all
						aspects of the game honorable and honest.
					</p>
				)
			},
			{
				title: 'Play on Time',
				description: (
					<p>
						Arrive at least 30 minutes before your tee time and play in the time allowed:
						<ul style={{listStyle: 'circle'}}>
							<li>9-holes should be played within 2 to 2 ¼ hours</li>
							<li>18-holes should be played in 4 to 4 ½ hours</li>
						</ul>
					</p>
				)
			},
			{
				title: 'Be Ready to Play',
				description: (
					<p>
						Always play ready golf and play as quickly as possible.
						Discourage slow play.
						You should not be any further than ¾ of a hole behind the group in front of you.
					</p>
				)
			},
			{
				title: 'Maintain the Course',
				description: (
					<p>
						Replace divots, rake bunkers, and repair ball and spike marks before leaving the greens.
					</p>
				)
			},
			{
				title: 'Keep Score',
				description: (
					<p>
						When keeping score in league, fellow players should keep each other’s scorecard. Players first
						and last name and date are entered on the scorecard. All scorecards must be dated, signed and
						attested. All scorecards should be placed in the box on the table in the locker room for weekly
						event coordinators to use in determining winners.
					</p>
				)
			},
			{
				title: 'Review Event Rules',
				description: (
					<p>
						Review the event and format rules for the day before teeing off.  (Posted on the bulletin board
						in the locker room and at the starter shack). Signed, attested and dated scorecards are to be
						left in the locker room for the event coordinator to collect.  The event coordinator will
						calculate the results of all events including ties with a scorecard playoff. Persons without an
						established handicap for net events will be assumed to have a handicap of zero and be placed in
						the top flight. The event coordinator will post the winners in the locker room and the EWGA
						website.
					</p>
				)
			},
			{
				title: 'Comply with Regulations',
				description: (
					<p>
						Comply with the golf course regulations; follow the club dress code, refrain from using foul
						language and each player must have their own set of clubs.
					</p>
				)
			},
			{
				title: 'Follow Tee Time Procedures',
				description: (
					<p>
						Follow the procedures for making tee times:
						<ul style={{listStyle: 'circle'}}>
							<li>
								Weekend EWGA league members must sign up for a tee time no later than the Thursday
								evening the week before Saturday play (8 days previous). Sign up is to be via the
								electronic sign-up process. Cancellations may be made up to 24 hours in advance of your
								tee time. Call the Pro Shop at <a href="tel:7633158550">763-315-8550</a>. If you do not show up or fail to cancel,
								you are responsible for paying a no-show charge.
							</li>
							<li>
								Tuesday league members must sign up for a tee time via the electronic sign-up process.
								Thursday tee times are on a first come, first serve basis.
							</li>
							<li>
								The general public may be slotted between any league foursome if no one is signed up for
								that tee time.
							</li>
							<li>
								Rainouts during weekend league play are valid only if they are authorized by the Pro Shop
								or the event chair person decides to cancel a league event.
							</li>
						</ul>
					</p>
				)
			},
			{
				title: 'Be an Active Member',
				description: (
					<p>
						Be an active member and help on committees/special events: i.e. day trip, member/guest day,
						member appreciation.
					</p>
				)
			},
			{
				title: 'Keep us Updated',
				description: (
					<p>
						If you change your street address, or email address, phone number, etc. please call or email the
						Treasurer, Karen Komp at <a href="mailto:karen.komp@remarkgroup.com">karen.komp@remarkgroup.com</a>,
						so we can update your membership info.
					</p>
				)
			},
			{
				title: "Don't Use Phones",
				description: (
					<p>
						The use of headphones during rounds of league events is prohibited.  It is not socially
						acceptable to generating camaraderie among our league members.
					</p>
				)
			},
			{
				title: 'Respect the Weather',
				description: (
					<p>
						In the case of inclement weather; it is the responsibility of the Pro Shop to decide if the
						course is deemed unplayable.  It is best to assume all rounds will be played when scheduled.
						Only the designated professional for the day in the Pro Shop makes the official call.
					</p>
				)
			}
		];
		var rulePrint = rules.map((rule, i) => (
			<div key={i}>
				<h3>{i+1}. {rule.title}</h3>
				<div style={{paddingLeft: '1em'}}>
					{rule.description}
				</div>
			</div>
		));
		return (
			<article>
				<h2>EWGA Edinburgh Women’s Golf Association CLUB RULES (BYLAWS)</h2>
				<div style={{fontSize: '0.8em'}}>
					<p>Purpose: Promote good fellowship amongst members and perpetuate the game of golf according to the established USGA standards. Promote competitive golf for all golfers that are members of the EWGA.</p>
					<p>As a member you are obligated to follow these rules and uphold a positive image with the City of Brooklyn Park, Edinburgh USA and the Minnesota Golf Community.</p>
				</div>
				{rulePrint}
			</article>
		);
	}
}

export default Rules;
