import React from 'react';

class EducationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.education;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        return this.props.action(this.state);
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
                <option key={i} value={year}>{year}</option>
            ))
        );
    }

    render(){
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
                        <option selected>Month</option> 
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
                        {this.getYears()}
                    </select>
                </div>

                <div>
                    <label>End date</label>
                    <select onChange={this.update('end_month')}>
                        <option selected>Month</option> 
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
                        {this.getYears()}
                    </select>

                    <select onChange={this.update('start_date')}></select>
                </div>

                <label>Grade</label>
                <input type="text" value={this.state.grade} onChange={this.update('grade')}/>

                <label>Activities and societies</label>
                <textarea value={this.state.grade} onChange={this.update('grade')}/>

                <label>Description</label>
                <testarea value={this.state.grade} onChange={this.update('grade')}/>
            </form>
        </div>

    }
}

export default EducationForm;