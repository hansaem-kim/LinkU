import React from 'react';

class EducationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.education;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const start_date = `${this.state.start_year}-${this.state.start_month}`;
        const end_date = `${this.state.end_year}-${this.state.end_month}`;
        this.props.action({
            ...this.state,
            start_date,
            end_date
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
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.props.formType}</h3>
                    <label>School</label>
                    <input type="text" value={this.state.school} onChange={this.update('school')}/>

                    <label>Degree</label>
                    <input type="text" value={this.state.degree} onChange={this.update('degree')}/>

                    <label>Field of study</label>
                    <input type="text" value={this.state.field} onChange={this.update('field')}/>

                    <div>
                        <label>Start date</label>
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

                    <div>
                        <label>End date</label>
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

                    <label>Grade</label>
                    <input type="text" value={this.state.grade} onChange={this.update('grade')}/>

                    <label>Activities and societies</label>
                    <textarea value={this.state.activities} onChange={this.update('activities')}/>

                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.update('description')}/>

                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </div>

        )


    }
}

export default EducationForm;