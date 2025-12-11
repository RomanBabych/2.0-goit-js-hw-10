import { images } from './images';

export const markup = images.reduce(
  (html, { preview, original, description }) => {
    return (html += `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `);
  },
  ''
);
