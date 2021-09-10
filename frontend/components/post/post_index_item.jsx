import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => (
    <li>
        <Link to={`/posts/${props.post.id}`}>{props.post.title}</Link>
        <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
        <button onClick={()=>props.destroyPost(props.post.id)}></button>
    </li>
)

export default PostIndexItem;