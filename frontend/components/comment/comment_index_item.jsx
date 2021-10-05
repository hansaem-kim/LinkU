import React from 'react';
import { connect } from 'react-redux';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const userPic = this.props.user.profilePic ? <img src={this.props.user.profilePic} /> : <img src={window.profileDefault} />
        return(
            <div>
                {userPic}
                <div>
                    <h1>Hello World!</h1>
                    <input type="text" />
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({
});

export default connect(mSTP, mDTP)(CommentIndexItem);
