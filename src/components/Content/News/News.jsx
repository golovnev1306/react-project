import React from 'react';
import Item from "./Item";


let refText = React.createRef();





const News = (props) => {

    let addNewsHandler = () => {
        props.state.addNews(refText.current.value);
    }

    let updateNewsBodyHandler = () => {
        props.state.updateNewsBody(refText.current.value);
    }

    let newsElements = props.state.news.map((item) => {
        return (<Item body = {item.body} number = {item.number} />)
    });
    return (
        <div>

            {newsElements}

            <div>
                <input ref={refText} value={props.state.newsBody} type="text" placeholder="here add a new" onChange={updateNewsBodyHandler}/>
            </div>
            <div>
                <input type="submit" value="Add" onClick={addNewsHandler}/>
            </div>
        </div>
    );
}

export default News;