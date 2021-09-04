import loadMoreBtn from "./load_more";
import { renderList,createGalleryItem} from "./makeMarkUp";
import { refs } from "./refs";
import scrollToElement from "./scroll";

    const requestApiSettings = {
    searchQuery: '',
    key: '23141875-b38ef2a229822d56efda8eea3',
    base_url: 'https://pixabay.com/api/',
    page: 1,
    per_page: 12,
}
let element = document.getElementById('img');
export default requestApiSettings;
export function fetchImages(e) {
    e.preventDefault();
    requestApiSettings.searchQuery = refs.input.value;
    const url = `${requestApiSettings.base_url}?image_type=photo&orientation=horizontal&q=${requestApiSettings.searchQuery}&page=${requestApiSettings.page}&per_page=${requestApiSettings.per_page}&key=${requestApiSettings.key}`;
    return fetch(url)
        .then(response => response.json())
        .then(({ hits }) => {
            renderList(hits)
            if (hits.length === 0) {
                window.alert('Your request is no valid!Try again!')
            }
            if (hits.length > 11) {
                loadMoreBtn();
            }
            //  return hits;
        })
        .then(scrollToElement())
        .then(incrementPage())
        .then(scrollToElement())
        .catch(catchError => {
                console.log(catchError);
            });
}
        
 export function incrementPage() {
        requestApiSettings.page ++;
}