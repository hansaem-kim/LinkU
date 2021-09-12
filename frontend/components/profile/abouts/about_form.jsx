import React from 'react';

class AboutForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.about;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action({
            ...this.state,
        });
        this.props.hideModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render(){
        const deleteButton = this.props.formType === 'Edit Goal' ? (
            <button onClick={() => {
                this.props.deleteAbout(this.state.id); this.props.hideModal()}} className='about-delete-btn'>Delete about</button>
            ) : null;
        return(
            <div className='about-form'>
                <header>
                        <div className="form-type">
                            <h3>{this.props.formType}</h3>
                            <div className='close-btn' onClick={()=> this.props.hideModal()}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>

                </header>
                <div className='form-body'>
                    <form onSubmit={this.handleSubmit}>
                        <div className = 'description-div about-form-sub'>
                            <label>Description</label>
                            <textarea value={this.state.body} onChange={this.update('body')}/>
                        </div>

                    </form>
                </div>
            
                <footer>
                    {deleteButton}
                    <button className={deleteButton ? 'about-create-btn' : 'about-create-btn2'} onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>

        )


    }
}

export default AboutForm;