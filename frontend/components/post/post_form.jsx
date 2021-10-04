import React from 'react';

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.post.id,
            body: this.props.post.body,
            author_id: this.props.currentUser.id,
            photoFile: null,
            photoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[author_id]", this.state.author_id);
        formData.append("post[id]", this.state.id);

        if (this.state.photoFile) {
            formData.append("post[photo]", this.state.photoFile);
        }
            
        this.props.action(formData).then(this.props.hideModal);
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }

        const postForm = document.getElementsByClassName('post-textarea')[0];
        postForm.style.height = '70px';
    }

    render(){
        const {currentUser} = this.props;
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return(
            <div className='post-form'>
                <header>
                    <div className='form-type'>
                        <h1>{this.props.formType}</h1>
                        <div className='close-btn' onClick={()=> this.props.hideModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                        
                    </div>

                    <div className='user-info-modal'>
                        <img className = 'user-photo' src={window.profileDefault} alt="hansaem-photo" />
                        <div className='user-name-headline'>
                            <h2>{currentUser.first_name} {currentUser.last_name}</h2>
                            <h3>{currentUser.headline}</h3>
                        </div>

                    </div>
                </header>

                <div className='post-form-content'>
                    <form id='post-form-body' onSubmit={this.handleSubmit}>
                        <div className='post-textarea-div'>
                            <textarea className='post-textarea' placeholder="What do you want to talk about?" value={this.state.body} onChange={this.update("body")}/>
                        </div>

                        <div className="photo-preview">
                            {preview}
                        </div>
                        <footer>
                            <div>
                                <div className='add-photo-btn' onClick={()=> document.getElementById('choose-file').click()}>
                                    <i className="fas fa-image fa-lg"></i>
                                </div>
                                
                                <input style={{display: 'none'}} id='choose-file' type="file" onChange={this.handleFile} />
                            </div>
                            <button className='post-submit-btn'>Post</button>
                        </footer>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default PostForm;