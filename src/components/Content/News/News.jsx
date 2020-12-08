import React from 'react';
import Item from "./Item";

let News = (props) => {
    return (
        <div>
            {props.state.news.map((item) => {
                return (<Item key={item.number} body={item.body} number={item.number}/>)
            })}
            <div>
                <input ref={props.refText} value={props.state.newsBody} type="text" placeholder="here add a new"
                       onChange={props.updateNewsBodyHandler}/>
            </div>
            <div>
                <input type="submit" value="Add" onClick={props.addNewsHandler}/>
            </div>
        </div>
    );
}

export default News;