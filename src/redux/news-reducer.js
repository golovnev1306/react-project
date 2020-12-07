const UPDATE_NEWS_BODY = 'update-news-body';
const ADD_NEWS = 'add-news';

let initialState = {
    news: [
        {number: 1, body: 'news about animals'},
        {number: 2, body: 'news about toys'},
        {number: 3, body: 'news about policy'},
    ],
    newsBody: '',
    counterNews: 4,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEWS_BODY:
            return {
                ...state,
                newsBody: action.text
            };
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, {
                    number: state.counterNews,
                    body: state.newsBody
                }],
                newsBody: '',
                counterNews: state.counterNews + 1
            };
        default:
            return state;
    }
}

export default newsReducer;