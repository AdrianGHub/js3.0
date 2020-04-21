import '../sass/style.scss'

// UNSPLASH API
// const imgTag = document.querySelector('img');


// function renderItem(){
//   fetch(`https://source.unsplash.com/400x400/?space`)
//   .then((response)=> {   
//     return response.url;
//   })
//   .then((image) => imgTag.setAttribute('src', image)); 
// }


// renderItem();


function listBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.log("Ups...", err))
}

function renderImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(img => {
            return img.message;
        })
        .catch((err) => console.log("Ups...", err))
}

const imgTag = document.querySelector('img');

renderImage()
    .then(img => imgTag.setAttribute('src', img));