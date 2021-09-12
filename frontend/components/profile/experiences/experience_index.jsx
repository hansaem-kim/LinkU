import React from 'react';
import ExperienceIndexItem from './experience_index_item';

class ExperienceIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllExperiences(this.props.profileUser.id)
    }

    render() {
        const { experiences, showModal, match, currentUser } = this.props;
        let createButton;
        if (currentUser.id == match.params.userId) {
            createButton = (<div className='create-btn' onClick={()=>showModal('createExperience')}>
            <i className="fas fa-plus"></i></div>)
        }else{
            createButton = null;
        }

        return (
            <div className='experience-div'>
                <header >
                    <h2>Experience</h2>
                    {createButton}
                </header>

                <div className='experience-index'>
                    {experiences.map(experience => (
                            <ExperienceIndexItem key={experience.id} experience={experience}/>
                        ))}
                </div>
                   
            </div>
        );
    }
}

export default ExperienceIndex;