import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    render(){
        const {postId, comments, currentUser} = this.props;
        return(
            <div>
                {comments.map(comment=>(
                    <CommentIndexItem postId={postId} user={comment.user} currentUser={currentUser} key={comment.id} />
                    ))
                }
            </div>
        )
    }
}

export default CommentIndex;