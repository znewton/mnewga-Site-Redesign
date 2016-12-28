import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../Components/Table.css';

class HandicapInfo extends Component {
	render() {
		return(
			<article>
				<h2>Handicaps</h2>
				<p>
					Our goal is to enjoy the game of golf in a competitive yet fun atmosphere while preserving the
					integrity of golf at all skill levels. By understanding some basic guidelines we hope to promote the
					respect and adherence to the Rules of golf. These objectives are not easily met without your help.
					Please take a few minutes to understand this process.
				</p>
				<ul>
					<li>How do we record weekly events?</li>
					<li>How do we adjust our scores for course handicap purposes?</li>
					<li>How do we post our scores for USGA Handicap Index?</li>
					<li>How do we claim our chits (Pro Shop Certificates)?</li>
					<li>What do we do with our scorecards when done?</li>
				</ul>
				<h3>A. Course Handicaps & ESC Adjustment Scores:</h3>
				<p>
					The USGA Handicap System provides the best method to enjoy a fair game by enabling all players with
					differing abilities to compete on an equitable basis. This is based on two basic premises:
					<ul>
						<li>Each player will try to make the best score at every hole in every round, regardless of where the round is played.</li>
						<li>Each player will post every acceptable round for peer review.</li>
					</ul>
				</p>
				<p>
					<strong>The player</strong> and the player’s <Link to="/committees">Handicap Committee</Link> have joint responsibility for adhering to these
					premises. Therefore all scores need to be adjusted in accordance of the ESC™ system and posted in
					accordance with the Rules of Golf.
				</p>
				<p>
					Golfers whose handicap has been established (five 18-hole rounds or ten 9-hole rounds – see rule #1)
					are required to reduce all higher than normal scores on a hole-by-hole basis before posting that
					score into the computer.
				</p>
				<p>
					Using your <strong>18-hole</strong> course handicap, follow this chart:
				</p>
				<table>
					<thead>
						<tr>
							<th colSpan="2">Equitable Stroke Control</th>
						</tr>
						<tr>
							<th>Course Handicap</th>
							<th>Maximum Number on any Hole</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								9 or less
							</td>
							<td>
								Double Bogey
							</td>
						</tr>
						<tr>
							<td>
								10 through 19
							</td>
							<td>
								7
							</td>
						</tr>
						<tr>
							<td>
								20 through 29
							</td>
							<td>
								8
							</td>
						</tr>
						<tr>
							<td>
								30 through 39
							</td>
							<td>
								9
							</td>
						</tr>
						<tr>
							<td>
								40 or more
							</td>
							<td>
								10
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					Using your <strong>9-hole</strong> course handicap, follow this chart:
				</p>
				<table>
					<thead>
					<tr>
						<th colSpan="2">Equitable Stroke Control</th>
					</tr>
					<tr>
						<th>Nine-Hole Course Handicap</th>
						<th>Maximum Number on any Hole</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							4 or less
						</td>
						<td>
							Double Bogey
						</td>
					</tr>
					<tr>
						<td>
							5 through 9
						</td>
						<td>
							7
						</td>
					</tr>
					<tr>
						<td>
							10 through 14
						</td>
						<td>
							8
						</td>
					</tr>
					<tr>
						<td>
							15 through 19
						</td>
						<td>
							9
						</td>
					</tr>
					<tr>
						<td>
							20 or more
						</td>
						<td>
							10
						</td>
					</tr>
					</tbody>
				</table>

				<h3>B. Posting Scores For USGA Handicap Index:</h3>
				<p>
					It is each member’s responsibility to post scores accurately, using the actual date that the round
					was played and the correct slope and rating. Even unfinished rounds must be posted if at least 14
					holes were completed (or 7 holes for a 9-hole round). The score to post for the remaining holes is
					determined by “Par plus strokes as they fall.” In match play, if putts are conceded, you are
					required to post a score that you would have reasonably gotten for that hole.
				</p>
				<h4>Multiple Ways To Post Your Score (use only one):</h4>
				<ul>
					<li>
						All EWGA events scorecards must be signed, attested and left in the Ladies Public Locker Room.  The Event Committee will post scores and winners.
					</li>
					<li>Leave any course scorecard (dated, signed, first and last names) in the Ladies Public lockerroom
						after play.  The EWGA event committee will post in the EWGA computer and download ESC adjusted
						scores to GHIN for handicapping.
					</li>
					<li>
						Using the Pro Shop’s computer into the GHIN System – ask if you need help.
					</li>
					<li>
						Internet website at <a href="www.ghin.com">www.ghin.com</a>. NOTE: When posting just one 9 hole score you will not see that
						posted score until the second 9 hole score posted is added to your first 9-hole score. The
						internet GHIN system only adds two 9-hole scores to achieve an 18-hole score. This site also
						allows you to sign up to be notified by email of each biweekly revision and to get a printable
						copy of your handicap card
					</li>
				</ul>
				<p>
					If you are unable to post your score online, please try posting your score in the Pro Shop’s
					computer at a later time. If it’s at a different course remember to use the correct USGA course
					rating and slope. Slope and rating will be on the course scorecard for the tees you played.
					The USGA Course Handicap calculator* is available online to convert your USGA Handicap Index to a
					course handicap for any course. (*Slope & Rating)
				</p>

				<h3>C. CHITS - Pro Shop Certificates</h3>
				<p>
					Chits are awarded per event. Check the bulletin board to see if you have won chits and collect
					them at the Pro Shop the week following the event.
				</p>
				<p>
					If you have any questions or problems regarding your handicap, please contract Kelly Andrews
					at <a href="mailto:andrewskm06@gmail.com">andrewskm06@gmail.com</a>.
				</p>

			</article>
		);
	}
}

export default HandicapInfo;