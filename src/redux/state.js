let state = {
    newsPage: {
        news: [
            {number: 1, body: 'news about animals'},
            {number: 2, body: 'news about toys'},
            {number: 3, body: 'news about policy'},
        ],
        addNews(body){
            this.news.push({
                number: this.counterNews,
                body: this.newsBody
            });
            this.newsBody = '';
            this.counterNews++;
            state.observer();
        },
        updateNewsBody(text) {
            debugger;
            this.newsBody = text;
            state.observer();
        },
        newsBody: '',
        counterNews: 4,
    },
    observer() {
        console.log("im is observer");
    },

    subscribe(observer) {
        this.observer = observer;
    }
}
window.state = state;

export default state;