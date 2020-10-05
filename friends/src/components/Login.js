import React, { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Container = styled.div`
background: transparent;
width: 100%;
max-width: 1200px;
margin: 20px auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
color: black;
box-shadow: 0px 1px 6px -2px grey;
`

const Login = (props) => {
	const [userLogin, setUserLogin] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setUserLogin({
			...userLogin,
			[e.target.name]: e.target.value,
		});
	};

	const login = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', userLogin)
			.then((res) => {
				console.log('pl: Login.js: login results: ', res);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/dashboard');
			})
			.catch((err) => {
				console.log('Login Failed', err);
				setUserLogin({
					username: '',
					password: '',
				});
			});
	};

	return (
		<div>
			<Container>
			<h1>Welcome, Log In Here!</h1>
			<form onSubmit={login}>
				<div>
					<label>Username: </label>
					<input
						type="text"
						name="username"
						value={userLogin.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Password: </label>
					<input
						type="password"
						name="password"
						value={userLogin.password}
						onChange={handleChange}
					/>
				</div>
				<button>Log In</button>
			</form>
			</Container>
		</div>
	);
};

export default Login;
