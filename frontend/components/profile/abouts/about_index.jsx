import React from 'react';
import AboutIndexItem from './about_index_item';

class AboutIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllAbouts(this.props.profileUser.id)
    }

    render() {
        const { abouts, showModal, match, currentUser } = this.props;
        let createButton;
        if (currentUser.id == match.params.userId) {
            createButton = (<div className='create-btn' onClick={()=>showModal('createAbout')}>
            <i className="fas fa-plus"></i></div>)
        }else{
            createButton = null;
        }
        return (
            <div className='about-div'>
                <header >
                    <h2>Goal</h2>
                    {createButton}
                </header>

                <div className='about-index'>
                    {abouts.map(about => {
                        if (about.user_id == match.params.userId)
                            return <AboutIndexItem key={about.id} about={about}/>
                    })}
                </div>
                   
            </div>
        );
    }
}

export default AboutIndex;