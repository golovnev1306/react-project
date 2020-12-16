import News from "./News";
import {connect} from "react-redux";
import React from 'react';
import {addNews} from "../../../redux/news-reducer";
import {compose} from 'redux';
import withRedirect from "../../../hoc/withRedirect";
import {getCountNews, getNewsSuper} from "../../../redux/selectors/news-selectors";

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
        news: getNewsSuper(state),
        counterNews:getCountNews(state),
    }
}

export default compose(
    withRedirect,
    connect(mapStateToProps, {addNews}),
)(NewsContainer);