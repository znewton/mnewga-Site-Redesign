import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import Home from './Views/Home';
import Components from './Views/Components';
import About from './Views/About';
import Board from './Views/Board';
import Committee from './Views/Committee';
import Rules from './Views/Rules';
import FourOFour from './Views/FourOFour';

ReactDOM.render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="home" component={Home} />
				<Route path="components" component={Components} />
				<Route path="about" component={About} />
				<Route path="board" component={Board} />
				<Route path="committees" component={Committee} />
				<Route path="rules" component={Rules} />
				<Route path="*" component={FourOFour} />
			</Route>
		</Router>
	),
  document.getElementById('root')
);
