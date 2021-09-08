import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component{
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.getUser(this.props.match.params.userId)
    }

    render(){
        return(
            <div>
                <h1>This is profile page of {this.props.currentUser.first_name}</h1>
                
            </div>
        )
    }
}

export default Profile;