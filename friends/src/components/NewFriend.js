import React, { useState } from 'react';
import axiosWithAuth from '../api/axiosWithAuth';

const NewFriend = ({ setFriends }) => {
	const [newFriend, setNewFriend] = useState({
		name: '',
		age: '',
		email: '',
	});

	const handleChange = (e) => {
		setNewFriend({
			...newFriend,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/friends', newFriend)
			.then((res) => {
				console.log('pl: NewFriend.js: handleSubmit: post results: ', res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.error('Failed to add new friend. loser', err.message);
			});
		setNewFriend({
			name: '',
			age: '',
			email: '',
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={newFriend.name}
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						onChange={handleChange}
						value={newFriend.age}
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={newFriend.email}
					/>
				</div>
				<button type="submit">Add New Friend</button>
			</form>
		</div>
	);
};

export default NewFriend;
