import NASA_KEY from "../secrets"

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}`

export const getImages = (callback) => {
  return fetch(url)
    .then(res => res.json())
    .then(callback);
}
