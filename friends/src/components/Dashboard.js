import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axiosWithAuth from '../api/axiosWithAuth';

import FriendsList from './FriendsList';
import AddFriend from './NewFriend';

import styled from 'styled-components';

const NavBar = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0:
	overflow: hidden;
	background-color: #333;
`;

const LItem = styled.li`
	float: right;
	color: white;
	display: block;
	padding: 14px 16px 14px 16px;
	text-decoration: none;
`;

const Dashboard = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/api/friends')
			.then((res) => {
				console.log('pl: Dashboard.js: axios.get: response: ', res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.error('Failed to retrieve Friends', err.message);
			});
	}, []);

	return (
		<div>
			<h1>F.R.I.E.N.D.S.</h1>
			<NavBar className="navBar">
				<LItem>
					<NavLink to="/dashboard/">Home</NavLink>
				</LItem>
				<LItem>
					<NavLink to="/dashboard/addfriend">Add a Friend</NavLink>
				</LItem>
				<LItem>
					<NavLink to="/">Log Out</NavLink>
				</LItem>
			</NavBar>
			<br />
			<br />
			<Switch>
				<Route
					exact
					path="/dashboard/"
					render={(props) => (
						<FriendsList {...props} friends={friends} setFriends={setFriends} />
					)}
				/>
				<Route
					path="/dashboard/addfriend"
					render={(props) => (
						<AddFriend {...props} friends={friends} setFriends={setFriends} />
					)}
				/>
			</Switch>
		</div>
	);
};

export default Dashboard;
