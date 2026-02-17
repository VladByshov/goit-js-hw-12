import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
export const loadBtn = document.querySelector('.js-gallery-btn');
const loader = document.querySelector('.loader');

let lightBox = null;

export function createGallery(images) {
  const markup = images
    .map(
      ({
         webformatURL,
         largeImageURL,
         tags,
         likes,
         views,
         comments,
         downloads,
       }) => {
        return `
            <li class="list-item">
                <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${likes}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${views}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${comments}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${downloads}</p>
                    </div>
                </div>
            </li>
        `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (lightBox) {
    lightBox.refresh();
  } else {
    lightBox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.style.display = 'inline-block';
}
export function hideLoader() {
  loader.style.display = 'none';
}
export function showLoadMoreButton() {
  loadBtn.classList.remove('shown');
}
export function hideLoadMoreButton() {
  loadBtn.classList.add('shown');
}