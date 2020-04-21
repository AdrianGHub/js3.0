class Doggo {
	constructor() {
		this.apiUrl = "https://dog.ceo/api/";
		this.imgTag = document.querySelector(".featured-dog img");
		this.backgroundEl = document.querySelector('.featured-dog__background');
	}

	listBreeds() {
		return fetch(`${this.apiUrl}breeds/list/all`)
			.then((res) => res.json())
			.then((data) => data.message)
			.catch((err) => console.log("Ups...", err));
	}

	getRandomImage() {
		return fetch(`${this.apiUrl}breeds/image/random`)
			.then((res) => res.json())
			.then((img) => {
				return img.message;
			})
			.catch((err) => console.log("Ups...", err));
	}

	init() {
        this.getRandomImage()
			.then((src) => { 
				this.imgTag.setAttribute("src", src);
				this.backgroundEl.style.background = `url(${src})`;
			});
        this.listBreeds()
            .then(breeds => console.log(breeds))
	}
}

export default Doggo;
