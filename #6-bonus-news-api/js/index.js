const API_KEY = '5c4695678e324eb1bccad1f9e170f730';


class PolishNews {
    constructor() {
        this.API = "http://newsapi.org/"
        this.API_VERSION = 'v2'
        this.API_RESOURCE = `top-headlines?country=pl&apiKey=${API_KEY}`

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`
    }

    async initializeArticles() {
        this.pullArticles()
    }

    async pullArticles() {
        const {articles} = await this.fetchData(this.API_ENDPOINT);

        console.log(articles);
    }

    async fetchData(url) {
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }
}

