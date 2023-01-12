

function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(response => response.json())
    .then(response => console.log("response", response.message))
}

getBreeds()