import {connect} from "react-redux";
import Status from "./Status";
import {setStatus} from "../../../redux/profile-reducer";
import React from "react";


class StatusContainer extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
            editMode: false
        }
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.setStatus(this.state.status);
    }

    setLocalStatusHandler = (text) => {
        this.setState({
            status: text
        });
    }

    render() {
        return (
            <Status status={this.state.status}
                    editMode={this.state.editMode}
                    setLocalStatusHandler={this.setLocalStatusHandler}
                    enableEditMode={this.enableEditMode}
                    disableEditMode={this.disableEditMode} />
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
