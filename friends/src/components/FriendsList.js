import React from 'react';
import Card from './Card';

import styled from 'styled-components';

const Start = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const FriendsList = ({ friends, setFriends }) => {
	return (
		<div>
			<Start>
			{friends.map((friend) => {
				return <Card key={friend.id} friend={friend} setFriends={setFriends} />;
			})}
			</Start>
		</div>
	);
};

export default FriendsList;
