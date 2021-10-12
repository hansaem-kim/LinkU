import React from "react";
import PostIndexContainer from "../post/post_index_container";

class Feed extends React.Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return(
            <div className='feed-div'>
                <div className='post-div'>
                    <div className='top-div'>
                        <img className = 'user-photo' src={window.profileDefault} alt="" />
                        <button onClick={()=>this.props.showModal('createPost')} className="start-post-btn">start a post</button>
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

                <div className='mini-profile-div'>
                    <img className = 'hansaem-photo' src={window.hansaemPhoto} />
                    <h1>Hello, I'm Hansaem.</h1>
                    <p>Please feel free to play around with LinkU</p>
                    <div class='sites'>
                        <a href="https://hansaem-kim.github.io/" target="_blank">
                        <i class="fas fa-user-circle fa-3x"></i>
                            <p>Portfolio</p>
                        </a>
                        <a href="https://www.linkedin.com/in/hansaem-kim-244238127/" target="_blank">
                            <i class="fab fa-linkedin fa-3x"></i>
                            <p>LinkedIn</p>
                        </a>
                        <a href="https://github.com/hansaem-kim" target="_blank">
                            <i class="fab fa-github fa-3x"></i>
                            <p>Github</p>
                        </a>
                        <a href="https://angel.co/u/hansaem-kim" target="_blank">
                            <i class="fab fa-angellist fa-3x"></i>
                            <p>AngelList</p>
                        </a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Feed;