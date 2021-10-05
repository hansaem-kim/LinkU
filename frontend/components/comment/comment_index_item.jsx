import React from 'react';
import { connect } from 'react-redux';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const userPic = this.props.user.profilePic ? <img src={this.props.user.profilePic} /> : <img src={window.profileDefault} />
        return(
            <div className='comment-div'>
                {userPic}

                <div className='comment-body'>
                    <header>
                        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                        <h4>{this.props.user.headline}</h4>
                    </header>

                    <p>{this.props.comment.body}</p>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.userId]
    
    }
};

const mDTP = (dispatch) => ({
});

export default connect(mSTP, mDTP)(CommentIndexItem);
