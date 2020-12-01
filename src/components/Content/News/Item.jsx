import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div>is Item {props.number}</div>
            <div>text is: {props.body}</div>
        </div>
    );
}

export default Item;