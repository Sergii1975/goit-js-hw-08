// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector('ul.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('');

list.insertAdjacentHTML('afterbegin', markup);
console.log(galleryItems);