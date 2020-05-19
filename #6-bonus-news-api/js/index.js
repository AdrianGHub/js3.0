const API_KEY = "5c4695678e324eb1bccad1f9e170f730";

class PolishNews {
	constructor() {
		this.pageSize = 12;
		this.currentPage = 1;
		this.articlesArray = [];
		this.articlesCatalog = null;

		this.API = "http://newsapi.org/";
		this.API_VERSION = "v2";
		this.API_RESOURCE = `everything?q=tech&apiKey=${API_KEY}`;

		this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

		this.UISelectors = {
			content: "[data-content]",
		};
	}

	initializeArticlesCatalog() {
		this.articlesCatalog = document.querySelector(this.UISelectors.content);

		this.pullArticles();
	}

	async pullArticles() {
		const { articles } = await this.fetchData(`${this.API_ENDPOINT}&pageSize=${this.pageSize}`);

		this.articlesArray = [...articles];

		this.createArticlesCatalog(this.articlesArray);

		// console.log(articles);
	}

	async fetchData(url) {
		const response = await fetch(url);
		const parsedResponse = await response.json();

		return parsedResponse;
	}

	createArticlesCatalog(articles) {
		this.articlesCatalog.innerHTML += [
			articles.map((article) => this.createArticle(article)).join(""),
		];
	}

	createArticle({
		source: { name },
		author,
        urlToImage,
        title,
		publishedAt,
		content,
		url,
	}) {
		return `
            <article class="article">
                <header class="article__header">
                    <h2 class="article__heading">
                        ${name}
                    </h2>
                    <p class="article__author"> Autor: 
                    ${author ? author : "Brak autora 😔"}
                    </p>
                    </header>
                    <p class="article__date">Data opublikowania: ${publishedAt}</p>
                    <img class="article__image" src="${urlToImage}" alt="Zdjęcie artykułu.""/>
                    <p class="article__title">${title}</p>
                    <p class="article__content">${
						content ? content : "Brak opisu artykułu 😟"
					}</p>
                    <a class="article__link"href="${url}">Czytaj cały artykuł &#8594;</a>
            </article>
        `;
	}
}
