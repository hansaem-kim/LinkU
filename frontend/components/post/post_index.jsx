import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchAllPosts();
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