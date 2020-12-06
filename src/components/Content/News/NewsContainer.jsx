import News from "./News";
import {connect} from "react-redux";


let addNewsActionCreator = () => ({type: "add-news"});
let updateTextNewsActionCreator = text => ({type: "update-news-body", text: text});

const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        newsBody: state.newsPage.newsBody,
        counterNews: state.newsPage.counterNews,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator());
        },

        updateNewsBody: (text) => {
            dispatch(updateTextNewsActionCreator(text));
        }
    }
}

let NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;