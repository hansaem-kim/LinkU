import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from "../../actions/modal_actions";

import CommentIndexContainer from "../comment/comment_index_container";
import CreateCommentForm from "../comment/create_comment_form_container";


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {show: false, comment: false}
        this.dropShow = this.dropShow.bind(this); 
        this.dropHide = this.dropHide.bind(this);
        this.showComment = this.showComment.bind(this);
        this.hideComment = this.hideComment.bind(this);
    }

    showComment() {
        this.setState({comment: true})
    }

    hideComment() {
        this.setState({comment: false})
    }

    dropShow() {
        this.setState({show: true})
    }

    dropHide(){
        this.setState({show: false})
    }

    render(){
        const editButton = (
            <div className='edit-btn' onClick={() => {return this.props.showModal('editPost', this.props.post.id)}} >
            <i className="far fa-edit"></i> Edit Post</div>)

        const deleteButton = (
            <div className='delete-btn' onClick={()=> this.props.destroyPost(this.props.post.id)}>
            <i className="far fa-trash-alt"></i> Delete Post</div>
        )
        
        let dropdown;
        if (this.props.currentUser.id == this.props.post.author_id){
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

        let comments;
        comments = this.state.comment ? <div>
                                            <CreateCommentForm postId={this.props.post.id} />

                                            <CommentIndexContainer postId={this.props.post.id} comments={this.props.comments} />
                                        </div> :
                                        null

        return(
            <div className='created-post-div'>
                <header className='created-post-header'>
                    <img className = 'user-photo' src={window.profileDefault} alt="hansaem-photo" />
                    <div className='header-right'>
                        <div>
                            <Link to={`/users/${this.props.post.author_id}`}>
                                <h2>{this.props.author.first_name} {this.props.author.last_name}</h2>
                                <h3>{this.props.author.headline}</h3>
                            </Link>
                        </div>
                        
                        {dropdown}
                    </div>

                </header>
                
                <div className="created-post-body"> 
                    <p>{this.props.post.body}</p>
                    <div className='attached-photo'>
                        <img src={this.props.post.photoUrl} />
                    </div>
                    
                </div>
                <footer className='comment-btn' onClick={this.state.comment ? this.hideComment : this.showComment}>
                    <i className="far fa-comment-dots"></i>
                    <p>Comment</p>
                </footer>


                {comments}
            </div>
        )
    }


}

const mSTP = (state, ownProps) => {
    const comments = Object.values(state.entities.comments).filter(comment => comment.post_id === ownProps.post.id)
    return {
        currentUser: state.entities.users[state.session.id],
        comments: comments,
    }
};

const mDTP = (dispatch) => ({
    showModal: (modal, id) => dispatch(showModal(modal, id))
});

export default connect(mSTP, mDTP)(PostIndexItem);