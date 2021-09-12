import React from 'react';

class EducationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.education;
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
        const deleteButton = this.props.formType === 'Edit Education' ? (
            <button onClick={() => {
                this.props.deleteEducation(this.state.id); this.props.hideModal()}} className='education-delete-btn'>Delete education</button>
            ) : null;
        return(
            <div className='education-form'>
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
                        <div className="school-div ed-form-sub">
                            <label>School</label>
                            <input type="text" placeholder="Ex: Boston University" value={this.state.school} onChange={this.update('school')}/>
                        </div>

                        <div className="degree-div ed-form-sub">
                            <label>Degree</label>
                            <input type="text" placeholder="Ex: Bachelor's" value={this.state.degree} onChange={this.update('degree')}/>
                        </div>

                        <div className="field-div ed-form-sub">
                            <label>Field of study</label>
                            <input type="text" placeholder="Ex: Business" value={this.state.field} onChange={this.update('field')}/>
                        </div>

                        <div className='start-date-div ed-form-sub'>
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

                        <div className='end-date-div ed-form-sub'>
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

                        <div className = 'grade-div ed-form-sub'>
                            <label>Grade</label>
                            <input type="text" value={this.state.grade} onChange={this.update('grade')}/>
                        </div>
                        <div className = 'activity-div ed-form-sub'>
                            <label>Activities and societies</label>
                            <textarea placeholder="Ex: Alpha Phi Omega, Marching Band, Volleyball" value={this.state.activities} onChange={this.update('activities')}/>
                        </div>
                        <div className = 'description-div ed-form-sub'>
                            <label>Description</label>
                            <textarea value={this.state.description} onChange={this.update('description')}/>
                        </div>

                    </form>
                </div>
            
                <footer>
                    {deleteButton}
                    <button className={deleteButton ? 'education-create-btn' : 'education-create-btn2'} onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>

        )


    }
}

export default EducationForm;