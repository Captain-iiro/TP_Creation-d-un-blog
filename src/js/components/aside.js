export function aside() {
    const aside = document.createElement('aside');
    aside.classList.add('sidebar');



    const ul = document.createElement('ul');
    ul.classList.add('ul');



    const title2 = document.createElement('h4');
    title2.classList.add('sidebar-title');
    title2.textContent = "Catégories";

    aside.appendChild(title2);
    aside.appendChild(ul);


    const categories = [
        'High-Tech',
        'Concentré du Web',
        'À propos',
        'Astuces pour développeurs',
        'Ressources',
        'Bonnes pratiques'
    ];




    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('li');
        const a = document.createElement('a');
        a.classList.add('a');
        a.textContent = category;
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);
    });

    const title1 = document.createElement('h4');
    title1.textContent = 'Auteur';
    aside.appendChild(title1);


    const ul2 = document.createElement('ul');
    ul.classList.add('ul');

    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('li');
        const a = document.createElement('a');
        a.classList.add('a');
        a.textContent = category;
        li.appendChild(a);
        a.href = "#";
        ul2.appendChild(li);
    });
    aside.appendChild(ul2);


    return aside;
}
