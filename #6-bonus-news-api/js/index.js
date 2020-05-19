const API_KEY = "5c4695678e324eb1bccad1f9e170f730";

class PolishNews {
	constructor() {
		this.pageSize = 3;
		this.currentPage = 1;
		this.articlesArray = [];
		this.newArticlesArray = [];


		this.articlesCatalog = null;
		this.loadButton = null;
		this.loader = null;

		this.API = "http://newsapi.org/";
		this.API_VERSION = "v2";
		this.API_RESOURCE = `everything?q=tech&apiKey=${API_KEY}`;

		this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

		this.UISelectors = {
			content: "[data-content]",
			button: "[data-button]",
			loader: "[data-loader]"
		};
	}

	initializeArticlesCatalog() {
		this.articlesCatalog = document.querySelector(this.UISelectors.content);
		this.loadButton = document.querySelector(this.UISelectors.button);
		this.loader = document.querySelector(this.UISelectors.loader);

		this.addEventListeners();

		this.pullArticles();
	}

	addEventListeners() {
		this.loadButton.addEventListener('click', () => this.pullArticles());
	}

	async pullArticles() {
		this.toggleShowElement(this.loader, this.loadButton);
		const { articles } = await this.fetchData(`${this.API_ENDPOINT}&page=${this.currentPage}&pageSize=${this.pageSize}`);
		this.toggleShowElement(this.loader, this.loadButton);

		this.articlesArray = [...this.articlesArray, ...articles]
		this.newArticlesArray = [...articles];

		this.createArticlesCatalog(this.newArticlesArray);
		this.currentPage++;
		// console.log(articles);
	}

	toggleShowElement(...elements) {
		elements.forEach(element => element.classList.toggle('hide'));
	}

	async fetchData(url) {
		const response = await fetch(url);
		const parsedResponse = await response.json();

		return parsedResponse;
	}

	createArticlesCatalog(articles) {
		this.articlesCatalog.insertAdjacentHTML('beforeend', [
			articles.map((article) => this.createArticle(article)).join(""),
		]);
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
