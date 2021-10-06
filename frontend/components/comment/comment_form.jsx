import React from 'react';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(){
    //     this.props.fetchAllComments();
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.setState({body: ""});
    }

    update(field){
        return e=> this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add a comment..." value={this.state.body} onChange={this.update("body")} />
                    <button className='comment-submit-btn'>Post</button>
    
                </form>
            </div>
        )

    }
}

export default CommentForm;