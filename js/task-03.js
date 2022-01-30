const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const photo = images
  .flatMap((image) => `<li><img src=${image.url} alt=${image.alt}></li>`)
  .join("");
gallery.insertAdjacentHTML("beforeend", photo);



// const listLi = document.createElement('li');
// listLi.classList.add('item');
//  const elemImg = document.createElement('img');
//  elemImg.src = ${images.url};
//  elemImg.alt = ${images.alt};

//  console.log(gallery);
//  console.log(elemImg);
//  elemImg.appendChild(listLi);
//  gallery.insertAdjacentHTML("beforeend", gallery);

