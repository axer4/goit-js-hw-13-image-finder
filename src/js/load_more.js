import { refs } from "./refs";

export default function loadMoreBtn() {
    refs.loadMore.classList.remove('is-hidden');
    refs.loadMore.classList.add('is-visible');
    }
