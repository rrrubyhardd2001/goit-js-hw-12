import { createGallery } from './js/render-functions';
import { searchPhoto } from './js/pixabay-api';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const srchPhoto = document.querySelector('.form-js-search');
const gallery = document.querySelector('.list-foto');
const loaderJs = document.querySelector('.loader');
const showLoader = () => (loaderJs.style.display = 'inline-block');
const hideLoader = () => (loaderJs.style.display = 'none');

const lightbox = new SimpleLightbox('.list-foto a', {
  captionData: 'alt',
  captionDelay: 250,
});

const onSearchForm = event => {
  event.preventDefault();

  const searchVal = srchPhoto.querySelector('.input-js').value.trim();
  loaderJs.classList.remove('is-hidden');
  gallery.innerHTML = '';

  searchPhoto(searchVal)
    .then(data => {
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
      loaderJs.classList.add('is-hidden');
      srchPhoto.reset();
    })
    .catch(error => {
      console.log(error);
    });
};

srchPhoto.addEventListener('submit', onSearchForm);
