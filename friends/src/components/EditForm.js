import React, { useState } from 'react';
import axiosWithAuth from '../api/axiosWithAuth';

const EditForm = ({ friend, setFriends, setIsEditing }) => {
	const [editFriend, setEditFriend] = useState({
		name: friend.name,
		age: friend.age,
		email: friend.email,
	});

	const handleChange = (e) => {
		setEditFriend({
			...editFriend,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/api/friends/${friend.id}`, editFriend)
			.then((res) => {
				console.log('pl: EditForm.js: handleSubmit: put request: ', res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.error('Failed to make changes', err.message);
			});
		setIsEditing(false);
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
						value={editFriend.name}
					/>
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						onChange={handleChange}
						value={editFriend.age}
					/>
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						value={editFriend.email}
					/>
				</div>
				<button>Submit!</button>
			</form>
		</div>
	);
};

export default EditForm;
