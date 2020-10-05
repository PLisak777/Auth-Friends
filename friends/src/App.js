import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import styled from 'styled-components';
import './App.css';

const Container = styled.div`
background: transparent;
width: 100%;
max-width: 1200px;
margin: 20px auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
color: white;
box-shadow: 0px 1px 6px -2px grey;
`

function App() {
	return (
		<div className="App">
			<Container>
				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
				</Switch>
				</Container>
		</div>
	);
};

export default App;
