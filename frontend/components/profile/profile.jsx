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
        const { educations } = this.props;
    }

    render(){
        return(
            <div className='profile-div'>
                <h1>This is the profile page of {this.props.currentUser.first_name}</h1>

                <section className='sub-section user'>
                    <div className='background-img-div'>
                        <img className="background-img" src={window.profileBackground} />
                    </div>
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