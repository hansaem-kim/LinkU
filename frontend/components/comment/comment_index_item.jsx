import React from 'react';
import { connect } from 'react-redux';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import { fetchAllComments } from "../../actions/comment_actions";


class CommentIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {body: this.props.comment.body, show: false, edit: false }
        this.dropShow = this.dropShow.bind(this); 
        this.dropHide = this.dropHide.bind(this);
        this.edit = this.edit.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    edit(){
        this.setState({edit: true});
    }

    finishEdit(){
        this.setState({edit: false})
    }

    dropShow() {
        this.setState({show: true})
    }

    dropHide(){
        this.setState({show: false})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateComment({body: this.state.body, user_id: this.props.currentUser.id, post_id: this.props.postId, id: this.props.comment.id});
        this.setState({body: this.state.body});
        this.finishEdit();
    }

    update(e){
        this.setState({body: e.currentTarget.value})
    }

    render() {
        const userPic = this.props.user.profilePic ? <img src={this.props.user.profilePic} /> : <img src={window.profileDefault} />

        const deleteButton = (
            <div className='delete-btn' onClick={()=> this.props.deleteComment(this.props.comment.id)}>
            <i className="far fa-trash-alt"></i> Delete</div>
        )

        const editButton = (
            <div className='edit-btn' onClick={() => {this.edit()}} >
            <i className="far fa-edit"></i> Edit</div>
        )

        const commentBox = this.state.edit ? <div>
                                                <input type="text" value={this.state.body} onChange={this.update} />
                                                <button onClick={this.handleSubmit}>Save Changes</button>
                                            </div>
                                            : 
                                            <p>{this.state.body}</p>;

        let dropdown;
        if (this.props.currentUser.id == this.props.comment.user_id){
            dropdown = (
                <button className='dropdown' onFocus={this.dropShow} onBlur={this.dropHide}>
                    <i className="fas fa-ellipsis-h"></i>
                    <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "hide-dropdown"}>
                        <div>
                            {editButton}
                        </div>
                        <div>
                            {deleteButton}
                        </div>
                    </ul>
                </button>
            );
        }else{
            dropdown = null;
        }

        return(
            <div className='comment-div'>
                {userPic}

                <div className='comment-body'>
                    <header>
                        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                        <h4>{this.props.user.headline}</h4>

                        {dropdown}
                    </header>

                    {commentBox}
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
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: (comment) => (dispatch(updateComment(comment))),
    fetchAllComments: () => (dispatch(fetchAllComments())),


});

export default connect(mSTP, mDTP)(CommentIndexItem);
