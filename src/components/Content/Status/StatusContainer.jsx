import {connect} from "react-redux";
import Status from "./Status";
import {setStatus} from "../../../redux/profile-reducer";
import React from "react";


class StatusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    blurHandler = (event) => {
        this.disableEditMode();
        this.props.setStatus(event.currentTarget.value);
    }

    submitHandler = () => {

    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <Status status={this.props.status}
                    editMode={this.state.editMode}
                    enableEditMode={this.enableEditMode}
                    blurHandler={this.blurHandler}
                    submitHandler={this.submitHandler}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status
    }
}

export default connect(mapStateToProps, {
    setStatus
})(StatusContainer);
