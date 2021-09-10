import React from "react";
import PostIndexContainer from "../post/post_index_container";

class Feed extends React.Component{
    render(){
        return(
            <div className='feed-div'>
                <div className='post-div'>
                    <div className='top-div'>
                        <img className = 'user-photo' src={window.hansaemPhoto} alt="hansaem-photo" />
                        <button className="start-post-btn">start a post</button>
                    </div>
                    <div className='botton-div'>
                        <div className='photo-icon icon'>
                            <i className="fas fa-image"></i>
                            <label>Photo</label>
                        </div>
                        
                        <div className='video-icon icon'>
                            <i className="fab fa-youtube"></i>
                            <label>Video</label>
                        </div>
                        
                        <div className='event-icon icon'>
                            <i className="far fa-calendar-alt"></i>
                            <label>Event</label>
                        </div>
                        
                        <div className='article-icon icon'>
                            <i className="far fa-newspaper"></i>
                            <label>Article</label>
                        </div>
                        
                        
                    </div>

                </div>
                <PostIndexContainer />
            </div>
        )

    }
}

export default Feed;