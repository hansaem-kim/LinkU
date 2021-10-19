import React from 'react';
import { Link } from 'react-router-dom';
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
        const userPic = this.props.currentUser.profilePic ? <img src={this.props.currentUser.profilePic} /> : <img src={window.profileDefault} />

        return(
            <div className='network-div'>
                <div className='network-inner-div'>
                    <header>
                        <h1>My Followers</h1>
                    </header>
                    
                    {users.map(user => {
                        return (
                            <div className='network-item'>
                                <img className='profile-pic' src={user.profilePic || window.profileDefault} />
                                <div className='user-info'>
                                    <Link to={`/users/${user.id}`}>
                                        <h2>{user.first_name} {user.last_name}</h2>
                                        <p>{user.headline}</p>
                                    </Link>
                                </div>


                            </div>
                        )
                    })}
                </div>

                <div className='user-mini-info'>
                    <header>
                        {userPic}
                        <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                        <p>{this.props.currentUser.headline}</p>
                    </header>
                    <div className='fololwer-num'>
                        {this.props.connections.length} followers
                    </div>
                </div>

                <div className='mini-profile-div'>
                    <img className = 'hansaem-photo' src={window.hansaemPhoto} />
                    <h1>Hello, I'm Hansaem.</h1>
                    <p>Please feel free to play around with LinkU</p>
                    <div className='sites'>
                        <a href="https://hansaem-kim.github.io/" target="_blank">
                            <i className="fas fa-user-circle fa-3x"></i>
                            <p>Portfolio</p>
                        </a>
                        <a href="https://www.linkedin.com/in/hansaem-kim-244238127/" target="_blank">
                            <i className="fab fa-linkedin fa-3x"></i>
                            <p>LinkedIn</p>
                        </a>
                        <a href="https://github.com/hansaem-kim" target="_blank">
                            <i className="fab fa-github fa-3x"></i>
                            <p>Github</p>
                        </a>
                        <a href="https://angel.co/u/hansaem-kim" target="_blank">
                            <i className="fab fa-angellist fa-3x"></i>
                            <p>AngelList</p>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mSTP, mDTP)(MyNetwork);