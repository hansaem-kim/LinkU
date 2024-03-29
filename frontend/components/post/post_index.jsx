import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchAllPosts();
        this.props.fetchAllComments();
    }

    render(){
        const {posts, destroyPost, currentUser} = this.props;
        return(
            <div>
                {posts.map(post=>(
                    <PostIndexItem post={post} author={post.author} currentUser={currentUser} destroyPost={destroyPost} key={post.id}/>
                    ))
                }
            </div>
        )
    }
}

export default PostIndex;