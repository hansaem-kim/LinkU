import React from 'react';
import { Link } from 'react-router-dom';
import EducationIndexContainer from './educations/education_index_container';
import ExperienceIndexContainer from './experiences/experience_index_container';
import AboutIndexContainer from './abouts/about_index_container';
import UserIntro from './user_intros/user_intro'


class Profile extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return(
            <div className='profile-div'>
                <section className='sub-section user'>
                    <UserIntro />
                </section>

                <section className='sub-section about'>
                    <AboutIndexContainer />
                </section>

                <section className='sub-section experience'>
                    <ExperienceIndexContainer />
                </section>
                
                <section className='sub-section education'>
                    <EducationIndexContainer />
                </section>

                
            </div>

        )
    }
}

export default Profile;