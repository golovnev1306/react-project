import React from 'react';

let Status = (props) => {
    return (
        <>
            {!props.editMode ? (<div onDoubleClick={props.enableEditMode}>
                    Status is: {props.status}
                </div>) : (<input type="text"
                                  autoFocus={true}
                                  value={props.status}
                                  onBlur={props.disableEditMode}
                                  onChange={(e) => {props.setLocalStatusHandler(e.currentTarget.value)}}/>)
            }
        </>
    );
}

export default Status;