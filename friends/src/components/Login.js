import React from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';

class Login extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	};

	handleChange = (e) => {
		this.setState({
			...this.state.credentials,
			[e.target.name]: e.target.value,
		});
	};

	login = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/login', this.state.credentials)
			.then((res) => {
				console.log('pl: Login.js: login results: ', res);
				localStorage.setItem('token', res.data.payload);
				this.props.history.push('/dashboard');
			})
			.catch((err) => {
				if (err.response) {
					console.error(
						'Login failed: response from server: ',
						err.response.data
					);
				} else {
					console.error('Login.js: login faile: err: ', err);
				}
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type="text"
						name="username"
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log In</button>
				</form>
			</div>
		);
	}
}

export default Login;
