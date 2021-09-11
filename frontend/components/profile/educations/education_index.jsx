import React from 'react';
import EducationIndexItem from './education_index_item';

class EducationIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllEducations(this.props.profileUser.id)
    }

    render() {
        const { educations, showModal, match, currentUser } = this.props;
        let createButton;
        if (currentUser.id == match.params.userId) {
            createButton = (<div className='create-btn' onClick={()=>showModal('createEducation')}>
            <i className="fas fa-plus"></i></div>)
        }else{
            createButton = null;
        }

        return (
            <div>
                <h2>Education</h2>
                {createButton}
                <ul>
                    {educations.map(education => (
                        <EducationIndexItem key={education.id} education={education}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EducationIndex;