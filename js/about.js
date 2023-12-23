// Image slideshow functionality

let i = 0;
const images = [];
const time = 3000;

images[0] = 'images/slideshow/boczek.jpeg';
images[1] = 'images/slideshow/bulka.jpeg';
images[2] = 'images/slideshow/golabki.jpg';
images[3] = 'images/slideshow/rurki.jpeg';
images[4] = 'images/slideshow/schab.jpeg';

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1 ) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;