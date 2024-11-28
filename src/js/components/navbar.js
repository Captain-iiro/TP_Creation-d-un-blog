import {createImageElement} from "@/js/components/createImageElement.js";

export function initNavbar() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const navList = document.createElement('ul');
  navList.classList.add('nav-list');
  const navItems = [
    { href: 'index.html', text: 'Accueil' },
    { href: 'articles.html', text: 'Articles' },
    { href: 'apropros.html', text: 'À propos' },
    { href: 'contact.html', text: 'Contact' },
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
  const twitter = document.createElement('a');
  twitter.title = 'twitter';
  twitter.appendChild(createImageElement('src/img/twitter.svg'));
  const facebook_svg = document.createElement('a');
  facebook_svg.title = 'Facebook';
  facebook_svg.appendChild(createImageElement('src/img/Shape.svg'));

  incons.classList.add('incons');
  incons.appendChild(facebook_svg);
  incons.appendChild(twitter);
  nav.appendChild(incons);

  return nav ;
}