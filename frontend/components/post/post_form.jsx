import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(this.props.hideModal);
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    render(){
        const {currentUser} = this.props
        return(
            <div className='post-form'>
                <header>
                    <div className='form-type'>
                        <h1>{this.props.formType}</h1>
                        <div className='close-btn' onClick={()=> this.props.hideModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                        
                    </div>

                    <div className='user-info'>
                        <img className = 'user-photo' src={window.hansaemPhoto} alt="hansaem-photo" />
                        <p>{currentUser.first_name} {currentUser.last_name}</p>
                    </div>
                </header>

                <div className='post-form-content'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='post-textarea'>
                            <textarea placeholder="What do you want to talk about?" value={this.state.body} onChange={this.update("body")}/>
                        </div>
                        
                        <footer>
                            <button className='post-submit-btn'>Post</button>
                        </footer>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default PostForm;