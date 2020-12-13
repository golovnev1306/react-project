import News from "./News";
import {connect} from "react-redux";
import React from 'react';
import {addNews} from "../../../redux/news-reducer";
import {compose} from 'redux';

class NewsContainer extends React.Component {
    refText = React.createRef();

    addNewsHandler = ({messageBody}) => {
        this.props.addNews(messageBody);
    }

    render = () => {
        return <News state={{...this.props}}
                     addNewsHandler={this.addNewsHandler}
                     refText={this.refText}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        counterNews: state.newsPage.counterNews,
    }
}

export default compose(
    connect(mapStateToProps, {addNews}),
)(NewsContainer);