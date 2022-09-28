import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector('.gallery');

const cardsMarkup = createCardsImageMarkup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}" data-lightbox="images" data-title="${description}">
              <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
          </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
