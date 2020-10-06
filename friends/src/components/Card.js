import React, { useState } from 'react';
import axiosWithAuth from '../api/axiosWithAuth';
import EditForm from './EditForm';

import styled from 'styled-components';

const CardStyle = styled.div`
	background: #fff580;
	color: black;
	width: 200px;
	max-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
	cursor: pointer;
	box-shadow: 0px 1px 6px -2px grey;
`;

const CardHead = styled.h3`
	margin: 0;
	font-size: 1rem;
	font-weight: 300;
	background: #fff580;
`;

const CardContent = styled.div`
	font-size: 0.75rem;
	line-height: 0.5;
	background: #fff580;
	font-weight: 200;
`;

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;

export const Card = ({ friend, setFriends }) => {
	const [isEditing, setIsEditing] = useState(false);

	const deleteFriend = (friend) => {
		axiosWithAuth()
			.delete(`/api/friends/${friend.id}`)
			.then((res) => {
				console.log('pl: Card.js: deleteFriend: delete result: ', res);
				setFriends(res.data);
			})
			.catch((err) => {
				console.error('Failed to ghost friend', err.message);
			});
	};

	const toggleEdit = () => {
		setIsEditing(true);
	};

	if (isEditing === false) {
		return (
			<CardStyle>
				<CardHead>{friend.name}</CardHead>
				<CardContent>
					<p>Email: {friend.email}</p>
					<p>Age: {friend.age}</p>
					<Button onClick={() => toggleEdit()}>Edit Friend</Button>
					<Button onClick={() => deleteFriend(friend)}>Delete Friend</Button>
				</CardContent>
			</CardStyle>
		);
	} else {
		return (
			<EditForm
				friend={friend}
				setFriends={setFriends}
				setIsEditing={setIsEditing}
			/>
		);
	}
};

export default Card;
