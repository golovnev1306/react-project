import News from "./News";
import {connect} from "react-redux";
import React from 'react';
import {addNews, updateNewsBody} from "../../../redux/news-reducer";

class NewsContainer extends React.Component{
    refText = React.createRef();

    addNewsHandler = () => {
        this.props.addNews();
    }

    updateNewsBodyHandler = () => {
        this.props.updateNewsBody(this.refText.current.value);
    };


    render = () => {
        return <News state={ {...this.props} }
                     updateNewsBodyHandler={this.updateNewsBodyHandler}
                     addNewsHandler={this.addNewsHandler}
                     refText={this.refText}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        newsBody: state.newsPage.newsBody,
        counterNews: state.newsPage.counterNews,
    }
}

export default connect(mapStateToProps, {addNews, updateNewsBody})(NewsContainer);