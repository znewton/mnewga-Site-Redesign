import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import Home from './Views/Home';
import Components from './Views/Components';
import About from './Views/About';
//EWGA Info
import Board from './Views/EWGA_Info/Board';
import Committee from './Views/EWGA_Info/Committee';
import Rules from './Views/EWGA_Info/Rules';
import MembershipApplication from './Views/EWGA_Info/MembershipApplication';
//Events
import RingersEvent from './Views/Events/RingersEvent';
import LeaguePlayTeamEvent from './Views/Events/LeaguePlayTeamEvent';
import GuestDayInvitational from './Views/Events/GuestDayInvitational';
import DayTripGolfOuting from './Views/Events/DayTripGolfOuting';
import ClubChampionship from './Views/Events/ClubChampionship';
import EighteenHoleEventSchedule from './Views/Events/EighteenHoleEventSchedule';
import NineHoleMatchPlayEvent from './Views/Events/NineHoleMatchPlayEvent';
import NineHoleEventSchedule from './Views/Events/NineHoleEventSchedule';
//Policies
import HandicapInfo from './Views/Policies/HandicapInfo';
import EdinburghUSA from './Views/Policies/EdinburghUSA';
import EWGA from './Views/Policies/EWGA';

import FourOFour from './Views/FourOFour';

ReactDOM.render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="home" component={Home} />
				<Route path="components" component={Components} />
				<Route path="about" component={About} />
				{/*EWGA Info*/}
				<Route path="board" component={Board} />
				<Route path="committees" component={Committee} />
				<Route path="rules" component={Rules} />
				<Route path="membershipApplication" component={MembershipApplication} />
				{/*Events*/}
				<Route path="ringers" component={RingersEvent} />
				<Route path="leaguePlay" component={LeaguePlayTeamEvent} />
				<Route path="guestDay" component={GuestDayInvitational} />
				<Route path="dayTrip" component={DayTripGolfOuting} />
				<Route path="clubChamp" component={ClubChampionship} />
				<Route path="18holeEvent" component={EighteenHoleEventSchedule} />
				<Route path="9holeMatch" component={NineHoleMatchPlayEvent} />
				<Route path="9holeEvent" component={NineHoleEventSchedule} />
				{/*Policies*/}
				<Route path="ewga" component={EWGA} />
				<Route path="edinburghusa" component={EdinburghUSA} />
				<Route path="handicap" component={HandicapInfo} />
				{/*Catchall*/}
				<Route path="*" component={FourOFour} />
			</Route>
		</Router>
	),
  document.getElementById('root')
);
