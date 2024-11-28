export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('topbar');
    header.appendChild(initNavbar())
    header.appendChild(createImageElement('src/img/image.png'));
    return header;
}
import {initNavbar} from "@/js/components/navbar.js";
import {createImageElement} from "@/js/components/createImageElement.js";