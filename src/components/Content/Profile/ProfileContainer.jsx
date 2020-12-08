import React from 'react';
import {connect} from 'react-redux';
import {setUserProfileData} from '../../../redux/profile-reducer';
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`, {}).then((response) => {
            this.props.setUserProfileData(response.data);
        });
    }

    render = () => {
        return (<>
                {this.props.userData &&
                <Profile userData={this.props.userData}/>
                }
            </>
        );
    }


}

let mapStateToProps = (state) => {
    return {
        userData: state.profilePage.userData,
    };
}

export default connect(mapStateToProps, {setUserProfileData})(withRouter(ProfileContainer));