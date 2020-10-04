import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/FriendsList">FriendsList</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path="/FriendsList" component={FriendsList} />
					<Route path="/login" component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
