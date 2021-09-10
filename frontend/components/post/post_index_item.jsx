import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => (
    <div class='created-post-div'>
        <p>{props.post.body}</p>
        <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
        <button onClick={()=>props.destroyPost(props.post.id)}>Delete</button>
    </div>

)

export default PostIndexItem;