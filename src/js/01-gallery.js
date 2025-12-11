import SimpleLightbox from 'simplelightbox';
import { images } from './helpers/images';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { markup } from './helpers/markup';

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
