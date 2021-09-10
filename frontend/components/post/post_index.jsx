import React from 'react';
import PostIndexItem from './post_index_item';
import CreatePostFormContainer from './create_post_form_container';

class PostIndex extends React.Component {
    componentDidMount(){
        this.props.fetchAllPosts();
    }

    render(){
        const {posts, destroyPost} = this.props;
        return(
            <div>
                {posts.map(post=>(
                            <PostIndexItem post={post} destroyPost={destroyPost} key={post.id}/>
                            ))
                }

                <CreatePostFormContainer />
            </div>
        )
    }
}

export default PostIndex;