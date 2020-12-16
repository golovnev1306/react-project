const ADD_NEWS = 'add-news';

let initialState = {
    news: [
        {number: 1, body: 'news about animals'},
        {number: 2, body: 'news about toys'},
        {number: 3, body: 'news about policy'},
    ],
    counterNews: 4,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE':
            console.log('we into case');
            return {...state}
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, {
                    number: state.counterNews,
                    body: action.newsBody
                }],
                counterNews: state.counterNews + 1
            };
        default:
            return state;
    }
}


export const addNews = (newsBody) => ({type: "add-news", newsBody});

export default newsReducer;