import React from 'react';
import Item from "./Item";

class News extends React.Component{
    refText = React.createRef();

    addNewsHandler = () => {
        this.props.addNews();
    }

    updateNewsBodyHandler = () => {
        this.props.updateNewsBody(this.refText.current.value);
    };

    getNewsElements = () => {
        return this.props.news.map((item) => {
            return (<Item key={item.number} body={item.body} number={item.number}/>)
        });
    }

    render = () => {
        return (
            <div>
                {this.getNewsElements()}
                <div>
                    <input ref={this.refText} value={this.props.newsBody} type="text" placeholder="here add a new"
                           onChange={ this.updateNewsBodyHandler }/>
                </div>
                <div>
                    <input type="submit" value="Add" onClick={ this.addNewsHandler }/>
                </div>
            </div>
        );
    }
}
export default News;