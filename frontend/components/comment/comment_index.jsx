import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props){
        super(props);
    }


    
    // componentDidUpdate(){
    //     this.props.fetchAllComments();
    // }

    render(){
        const {postId, comments, currentUser} = this.props;
        return(
            <div>
                {comments.reverse().map(comment=>(
                    <CommentIndexItem comment={comment} postId={postId} userId={comment.user_id} currentUser={currentUser} key={comment.id} />
                    ))
                }
            </div>
        )
    }
}

export default CommentIndex;