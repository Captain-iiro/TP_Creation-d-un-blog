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
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    nav.appendChild(link); // Ajout de chaque <li> au <ul>
  });

  return nav ;
}