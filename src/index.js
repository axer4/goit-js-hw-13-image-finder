import './sass/main.scss';
import { refs } from './js/refs.js';
import requestApiSettings from './js/apiService.js';
import { fetchImages,incremetPage } from './js/apiService.js';
import { createGallery,clearMarkUp } from './js/makeMarkUp';
import loadMoreBtn from './js/load_more.js';
import scrollToElement from './js/scroll.js';
function enableSerach() {
    if (refs.input.value !== '') {
        refs.button.removeAttribute('disabled');
    }
    else if (refs.input.value === '') {
        refs.button.setAttribute('disabled', 'disabled');
    }
}
refs.button.addEventListener('click', fetchImages);
refs.loadMore.addEventListener('click', fetchImages);
refs.input.addEventListener('input', clearMarkUp);
// refs.button.addEventListener('click', loadMoreBtn);
refs.input.addEventListener('input', enableSerach);
// refs.loadMore.addEventListener('click', scrollToElement);