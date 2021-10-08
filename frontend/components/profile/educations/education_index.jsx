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
            <div className='education-div'>
                <header >
                    <h2>Education</h2>
                    {createButton}
                </header>

                <div className='education-index'>
                    {educations.map(education => {
                        if (education.userId == match.params.userId)
                            return <EducationIndexItem key={education.id} education={education}/>
                        })}
                </div>
                   
            </div>
        );
    }
}

export default EducationIndex;