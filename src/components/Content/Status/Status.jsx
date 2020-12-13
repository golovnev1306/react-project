import React from 'react';
import {Field, reduxForm} from "redux-form";

let Status = (props) => {

    let initialValues = {
        status: props.status
    }

    return (
        <>
            {!props.editMode ? (<div onDoubleClick={props.enableEditMode}>
                Status is: {props.status}
            </div>) : (<StatusFormRedux onSubmit={props.submitHandler} initialValues={initialValues} blurHandler={props.blurHandler} />)
            }
        </>
    );
}

const StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field onBlur={props.blurHandler}
                   type="text"
                   autoFocus={true}
                   component='input'
                   name='status'/>
        </form>
    );
}

const StatusFormRedux = reduxForm({form: 'editStatus'})(StatusForm);

export default Status;