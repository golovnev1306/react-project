import {createSelector} from 'reselect';

export const getNews = state => state.newsPage.news;
export const getCountNews = state => state.newsPage.counterNews;

export const getNewsSuper = createSelector(
    getNews,
    (news) => {
        return news.filter(u => true);
    }
)
