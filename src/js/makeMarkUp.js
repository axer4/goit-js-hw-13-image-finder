import { refs } from "./refs";
export function createGalleryItem(obj) {
    const markUp = `<div class="photo-card">
  <img src="${obj.webformatURL}" alt="${obj.tags}" width = 250, height = 200/>

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up </i>
      ${obj.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons"> visibility </i>
      ${obj.views}
    </p>
    <p class="stats-item">
      <i class="material-icons"> comment </i>
      ${obj.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons" cloud_download </i>
      ${obj.downloads}
    </p>
  </div>
</div>`
  refs.gallery.insertAdjacentHTML('beforeend', markUp)
}
export function renderList(arr) {
     arr.forEach(el => createGalleryItem(el));
}
export function clearMarkUp() {
  if (refs.input.value === '') {
    refs.gallery.innerHTML = '';
    refs.loadMore.classList.add('is-hidden');
  }
}
