import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
    return(
        <div className='created-post-div'>
            <header className='created-post-header'>
                <img className = 'user-photo' src={window.hansaemPhoto} alt="hansaem-photo" />
                <h2>{props.currentUser.first_name} {props.currentUser.last_name}</h2>
            </header>
            
            <div className="created-post-body"> 
                <p>{props.post.body}</p>
            </div>
            
            <Link to={`/posts/${props.post.id}/edit`}>Edit</Link>
            <button onClick={()=>props.destroyPost(props.post.id)}>Delete</button>
        </div>
    )


}

export default PostIndexItem;