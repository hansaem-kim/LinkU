import React from 'react';
import { connect } from 'react-redux';
import { getUser, getUsers } from '../../actions/user_actions';
import { fetchConnections, createConnection, deleteConnection } from '../../actions/connection_actions';



const mSTP = (state, ownProps) => {
    const connections = Object.values(state.entities.connections);
    let users = connections.map(connection => {
        return state.entities.users[connection.follower_id]
    });
    return{
        currentUser: state.entities.users[state.session.id],
        connections,
        users,
    }
};

const mDTP = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id)),
        getUsers: () => dispatch(getUsers()),
        fetchConnections: (userId) => dispatch(fetchConnections(userId)),
        createConnection: (connection) => dispatch(createConnection(connection)),
        deleteConnection: (connectionId) => dispatch(deleteConnection(connectionId))

    }
}


class MyNetwork extends React.Component{
    constructor(props) {
        super(props);
    };

    componentDidMount(){
        this.props.getUsers().then(()=>this.props.fetchConnections(this.props.currentUser.id));
        
    }

    render(){
        const users = this.props.users;
        return(
            <div className='network-div'>
                <div className='network-inner-div'>
                    <h1>My Followers</h1>
                    {users.map(user => {
                        return (
                            <div className='network-item'>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <p>{user.headline}</p>

                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default connect(mSTP, mDTP)(MyNetwork);