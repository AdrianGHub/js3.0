const API_KEY = '5c4695678e324eb1bccad1f9e170f730';


class PolishNews {
    constructor() {
        this.articlesArray = [];

        this.articlesCatalog = null;


        this.API = "http://newsapi.org/";
        this.API_VERSION = 'v2';
        this.API_RESOURCE = `top-headlines?country=pl&apiKey=${API_KEY}`;

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

        this.UISelectors = {
            content: '[data-content]'
        }
    }

    initializeArticlesCatalog() {
        this.articlesCatalog = document.querySelector(this.UISelectors.content);

        this.pullArticles()
    }

    async pullArticles() {
        const { articles } = await this.fetchData(this.API_ENDPOINT);

        this.articlesArray = [...articles];

        this.createArticlesCatalog(this.articlesArray);

        console.log(articles);

    }

    async fetchData(url) {
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }

    createArticlesCatalog(articles) {
        this.articlesCatalog.innerHTML += [
            articles.map(article => {
                if(article.author) {
                    return `Autor artykułu: ${article.author}`
                } else {
                    return 'Brak autora 😔'
                }
            })
        ]
    }
}

