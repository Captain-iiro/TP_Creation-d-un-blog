export const Header = () => {
    const header = document.createElement('header');
    header.classList.add('topbar');
    header.appendChild(initNavbar());

    const incons = document.createElement('div');
    const twitter = document.createElement('a');
    twitter.title = 'twitter';
    twitter.appendChild(createImageElement('src/img/twitter.svg'));
    const facebook_svg = document.createElement('a');
    facebook_svg.title = 'Facebook';
    facebook_svg.appendChild(createImageElement('src/img/Shape.svg'));

    incons.classList.add('incons');
    incons.appendChild(facebook_svg);
    incons.appendChild(twitter);
    header.appendChild(incons);


    return header;
}
import {initNavbar} from "@/js/components/navbar.js";
import {createImageElement} from "@/js/components/createImageElement.js";