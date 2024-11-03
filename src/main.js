import { createGallery } from './js/render-functions';
import { searchPhoto } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const srchPhoto = document.querySelector('.form-js-search');
const gallery = document.querySelector('.list-foto');
const loaderJs = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.js-load-more');

const showLoader = () => (loaderJs.style.display = 'inline-block');
const hideLoader = () => (loaderJs.style.display = 'none');
let currPage = 1;
let searchValue = '';
const per_page = 15;

const lightbox = new SimpleLightbox('.list-foto a', {
  captionData: 'alt',
  captionDelay: 250,
});

const onSearchForm = async event => {
  event.preventDefault();

  searchValue = srchPhoto.querySelector('.input-js').value.trim();
  if (searchValue === '') {
    iziToast.error({
      message: 'Sorry, there no image you are looking',
      position: 'topRight',
    });
    return;
  }
  showLoader();
  btnLoadMore.classList.add('is-hidden');
  gallery.innerHTML = '';
  currPage = 1;

  try {
    const response = await searchPhoto(searchValue, currPage, per_page);
    const data = response.data;
    if (data.hits.length == 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      srchPhoto.reset();
      return;
    }

    const galleryTemplate = data.hits
      .map(imgdetails => createGallery(imgdetails))
      .join('');
    gallery.innerHTML = galleryTemplate;

    lightbox.refresh();
    hideLoader();
    srchPhoto.reset();
    if (data.totalHits > currPage * per_page) {
      btnLoadMore.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
};

const onLoadmore = async () => {
  currPage++;
  showLoader();

  try {
    const response = await searchPhoto(searchValue, currPage, per_page);
    const data = response.data;

    const galleryCardsTemplate = data.hits
      .map(imgdetails => createGallery(imgdetails))
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    smthscroll();
    lightbox.refresh();
    if ((currPage * per_page) / data.totalHits) {
      btnLoadMore.classList.add('is-hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: "We're sorry, something wrong.",
      position: 'topLeft',
    });
    console.log(error);
  } finally {
    hideLoader();
  }
};

const smthscroll = () => {
  const { height } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
  btnLoadMore.classList.add('is-hidden');
};

srchPhoto.addEventListener('submit', onSearchForm);
btnLoadMore.addEventListener('click', onLoadmore);
