import React from 'react';
import Item from "./Item";
import {Field, reduxForm} from "redux-form";

let News = (props) => {
    return (
        <div>
            {props.state.news.map((item) => {
                return (<Item key={item.number} body={item.body} number={item.number}/>)
            })}
            <AddMessageFormRedux onSubmit={props.addNewsHandler}/>
        </div>
    );
}

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='messageBody' component='input' type='text' placeholder='Input message here'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: 'addNews'})(addMessageForm)

export default News;