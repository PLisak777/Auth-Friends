import React from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            console.log('pl: FriendsList.js: getData: get results: ', res)
            this.setState({
                friends: res.data
            })
        })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FriendsList
