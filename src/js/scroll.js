import { refs } from "./refs";
let element = document.getElementById('img');
export default function scrollToElement() {
    setTimeout(() => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, 700);
}

