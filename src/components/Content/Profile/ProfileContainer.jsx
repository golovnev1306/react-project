import React from 'react';
import {connect} from 'react-redux';
import {getProfile, setUserProfileData} from '../../../redux/profile-reducer';
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
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

export default connect(mapStateToProps, {setUserProfileData, getProfile})(withRouter(ProfileContainer));