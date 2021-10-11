import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showModal } from '../../../actions/modal_actions';
import { getUser, getUsers } from '../../../actions/user_actions';
import { fetchConnections, createConnection, deleteConnection } from '../../../actions/connection_actions';



const mSTP = (state, ownProps) => {
    return{
        profileUser: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.id],
        connections: Object.values(state.entities.connections)
    }
};

const mDTP = (dispatch) => {
    return {
        showModal: (modal, id) => dispatch(showModal(modal, id)),
        getUser: (id) => dispatch(getUser(id)),
        getUsers: () => dispatch(getUsers()),
        fetchConnections: (userId) => dispatch(fetchConnections(userId)),
        createConnection: (connection) => dispatch(createConnection(connection)),
        deleteConnection: (connectionId) => dispatch(deleteConnection(connectionId))

    }
}


class UserIntro extends React.Component{
    constructor(props) {
        super(props);
        this.state = {following: false, connectionId: null};
        this.handleConnection = this.handleConnection.bind(this);
    };

    componentDidMount(){
        this.props.getUser(this.props.profileUser.id);
        this.props.getUsers();
        this.props.fetchConnections(this.props.profileUser.id).then(()=> {
            this.props.connections.map(connection => {
                if (connection.followee_id == this.props.profileUser.id && connection.follower_id == this.props.currentUser.id) {
                    this.setState({ following: true })
                    this.setState({ connectionId: connection.id })
                }
            })
        })

    }

    handleConnection(e){
        e.preventDefault();
        if (!this.state.following){
            this.props.createConnection({follower_id: this.props.currentUser.id, followee_id: this.props.profileUser.id, accepted: true});
            this.setState({following: true});
        } else {
            this.props.deleteConnection(this.state.connectionId);
            this.setState({following: false});
        }
    }

    render(){
        let editButton;
        if (this.props.currentUser.id === this.props.profileUser.id) {
            editButton = (<div className='edit-btn' onClick={() => {return this.props.showModal('editUserIntro', this.props.currentUser.id)}} >
            <i className="fas fa-pencil-alt" ></i></div>)
        }else{
            editButton = null;
        }

        let followButton;
        if (this.props.currentUser.id !== this.props.profileUser.id) {
            followButton = this.state.following ? 
                <button onClick={this.handleConnection} className='follow-btn'>Unfollow</button> : 
                <button onClick={this.handleConnection} className='follow-btn'>Follow</button>
        }

        let relationship = this.state.following ? <p className="relationship">·1st</p> : null;
        return(
            <div className='user-info'>
                <div className='background-img-div'>
                    <img className="background-img" src={window.profileBackground} />
                </div>
                <div className='user-photo'>
                    <img src={window.profileDefault} />
                </div>
                <div className='user-detail'>
                    <header>
                        <div className='user-name'>
                            <h2>{this.props.profileUser.first_name} {this.props.profileUser.last_name} </h2>
                            <p>({this.props.profileUser.pronouns})</p>
                            {relationship}
                        </div>
                        {editButton}
                        
                    </header>
                    <div className='user-headline'>
                        <h3>{this.props.profileUser.headline}</h3>
                    </div>
                    <div className='user-location'>
                        <p>{this.props.profileUser.location}</p>
                    </div>
                    <div className='follow-user'>
                        {followButton}
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(connect(mSTP, mDTP)(UserIntro));