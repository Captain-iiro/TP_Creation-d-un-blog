import {createImageElement} from "@/js/components/createImageElement.js";

export function initNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const navList = document.createElement('ul');
  navList.classList.add('nav-list');
  const navItems = [
    { href: '#Accueil', text: 'Accueil' },
    { href: '#Articles', text: 'Articles' },
    { href: '#À propos', text: 'À propos' },
    { href: '#Contact', text: 'Contact' },
  ];
  navItems.forEach(item => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    listItem.appendChild(link);
    navList.appendChild(listItem); // Ajout de chaque <li> au <ul>
  });
  nav.appendChild(navList);

  const incons = document.createElement('div');
  const twitter = createImageElement('src/img/twitter.svg');
  const facebook_svg = createImageElement('src/img/Shape.svg');
  incons.classList.add('incons');
  incons.appendChild(facebook_svg);
  incons.appendChild(twitter);
  nav.appendChild(incons);

  return nav ;
}