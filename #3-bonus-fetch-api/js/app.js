import '../sass/style.scss'


function listOfBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breeds => {
            return breeds.message;
        })
        .catch(err => console.log('Ups...', err))
}; 

function getRandomImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(image => {
            return image.message;
        }) 
        .catch(err => console.log('Ups...', err))
}

const imgTag = document.querySelector('img');

getRandomImage()
    .then((image) => imgTag.setAttribute('src', image));
