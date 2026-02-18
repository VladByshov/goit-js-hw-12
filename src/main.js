import { perPage, request } from './js/pixabay-api';
import {
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  loadBtn,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import { clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);
loadBtn.addEventListener('click', onLoadMoreClick);
let resInput = '';
let pageNum = 1;
let totalPages = 0;

hideLoader();

async function onSubmitForm(event) {
  event.preventDefault();
  pageNum = 1;
  hideLoadMoreButton();
  clearGallery();

  resInput = form.elements['search-text'].value.trim();
  try {
    if (resInput === '') {
      iziToast.show({
        message: 'Please enter a search query!',
        backgroundColor: `#EF4040`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      });
      hideLoadMoreButton();
      hideLoader();
      clearGallery();
      return;
    }
    showLoader();
    const { hits, totalHits } = await request(resInput, pageNum);
    totalPages = Math.ceil(totalHits / perPage);

    if (!hits || hits.length === 0) {
      console.log(hits);
      iziToast.show({
        message:
          ' Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: `#EF4040`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      });
      hideLoader();
      return;
    }
    createGallery(hits);
    if (pageNum < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoadMoreButton();
    console.log(error.message);
    iziToast.show({
      message: 'An error occurred on the server side, please try again!',
      backgroundColor: `#EF4040`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
  } finally {
    form.elements['search-text'].value = '';
    hideLoader();
  }
}

async function onLoadMoreClick() {
  pageNum += 1;
  hideLoadMoreButton();
  showLoader();
  try {
    const { hits } = await request(resInput, pageNum);

    createGallery(hits);

    const element = document.querySelector('.gallery li');
    if (element) {
      const scrollDistance = element.getBoundingClientRect();
      window.scrollBy({
        top: scrollDistance.height * 2,
        behavior: 'smooth',
      });
    }

    if (pageNum >= totalPages) {
      hideLoadMoreButton();
      iziToast.error({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.show({
      message: 'An error occurred on the server side, please try again!',
      backgroundColor: `#EF4040`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
    console.log(error);
  } finally {
    hideLoader();
  }
}