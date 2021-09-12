import React from 'react';

class ExperienceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.experience;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const start_date = `${this.state.start_month} ${this.state.start_year}`;
        const end_date = `${this.state.end_month} ${this.state.end_year}`;
        this.props.action({
            ...this.state,
            start_date: start_date,
            end_date: end_date
        });
        this.props.hideModal();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    getYears(){
        let years = [];
        for (let i=1960; i<=2030; i++){
            years.unshift(i);
        }
        return (
            years.map(year => (
                <option key={year} value={year}>{year}</option>
            ))
        );
    }

    render(){
        const deleteButton = this.props.formType === 'Edit Experience' ? (
            <button onClick={() => {
                this.props.deleteExperience(this.state.id); this.props.hideModal()}} className='experience-delete-btn'>Delete experience</button>
            ) : null;
        return(
            <div className='experience-form'>
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
                        <div className="title-div ex-form-sub">
                            <label>Title*</label>
                            <input type="text" placeholder="Ex: Retail Sales Manager" value={this.state.title} onChange={this.update('title')}/>
                        </div>

                        <div className='employment-type-div ex-form-sub'>
                            <label>Employment type</label>
                            <div className='employment-type-selector'>
                                <select onChange={this.update('employment_type')}>
                                    <option defaultValue>Please select</option> 
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Self-employed</option>
                                    <option>Freelance</option>
                                    <option>Contract</option>
                                    <option>Internship</option>
                                    <option>Apprenticeship</option>
                                    <option>Seasonal</option>
                                </select>
                            </div>
                        </div>

                        <div className="company-div ex-form-sub">
                            <label>Company name*</label>
                            <input type="text" placeholder="Ex: Microsoft" value={this.state.company} onChange={this.update('company')}/>
                        </div>

                        <div className="location-div ex-form-sub">
                            <label>Location</label>
                            <input type="text" placeholder="Ex: London, United Kingdom" value={this.state.location} onChange={this.update('location')}/>
                        </div>

                        <div className='start-date-div ex-form-sub'>
                            <label>Start date</label>
                            <div className='date-selector'>
                                <select onChange={this.update('start_month')}>
                                    <option defaultValue>Month</option> 
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>

                                <select onChange={this.update('start_year')}>
                                    <option defaultValue>Year</option>
                                    {this.getYears()}
                                </select>
                            </div>
                        </div>

                        <div className='end-date-div ex-form-sub'>
                            <label>End date</label>
                            <div className='date-selector'>
                                <select onChange={this.update('end_month')}>
                                    <option defaultValue>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>

                                <select onChange={this.update('end_year')}>
                                    <option defaultValue>Year</option>
                                    {this.getYears()}
                                </select>
                            </div>
                        </div>

                        <div className = 'headline-div ex-form-sub'>
                            <label>Headline</label>
                            <input type="text" value={this.state.headline} onChange={this.update('headline')}/>
                        </div>

                        <div className = 'industry-div ex-form-sub'>
                            <label>Industry</label>
                            <input type="text" value={this.state.industry} onChange={this.update('industry')}/>
                        </div>

                        <div className = 'description-div ex-form-sub'>
                            <label>Description</label>
                            <textarea value={this.state.description} onChange={this.update('description')}/>
                        </div>

                    </form>
                </div>
            
                <footer>
                    {deleteButton}
                    <button className={deleteButton ? 'experience-create-btn' : 'experience-create-btn2'} onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>

        )


    }
}

export default ExperienceForm;