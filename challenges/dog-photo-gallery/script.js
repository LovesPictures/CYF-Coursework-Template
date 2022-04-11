/*

// 20220302185652
// https://dog.ceo/api/breeds/image/random

{
  "message": "https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg",
  "status": "success"
}
*/

let button = document.querySelector(`button`);

let ul = document.querySelector(`ul`);
button,
  addEventListener(`click`, () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        let url = json.message;
        let img = document.createElement(`img`);
        img.src = url;
        img.style.width = `360px`;
        img.style.height = `320px`;
        let li = document.createElement(`li`);
        li.appendChild(img);
        ul.appendChild(li);
      });
  });
//clear the image && replace with a new image
