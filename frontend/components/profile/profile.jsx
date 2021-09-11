import React from 'react';
import { Link } from 'react-router-dom';
import EducationIndexContainer from './educations/education_index_container';

class Profile extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        const { educations } = this.props;
        // this.props.getUser(this.props.match.params.userId)
    }

    render(){
        return(
            <div className='profile-div'>
                <h1>This is the profile page of {this.props.currentUser.first_name}</h1>
                <section className='sub-section user'>
                    {/* <p>User info</p> */}
                    <div className='background-img-div'>
                        <img className="background-img" src={window.profileBackground} />
                    </div>
                    
                </section>
                <section className='sub-section about'>
                    <p>About</p>
                </section>
                <section className='sub-section experience'>
                    <p>Experience</p>
                </section>
                <section className='sub-section education'>
                    <EducationIndexContainer />
                </section>

                
            </div>

        )
    }
}

export default Profile;