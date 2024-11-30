export function main_content() {
    const main_content = document.createElement('main');
    main_content.classList.add('main');

    const content = document.createElement('div');
    content.classList.add('container');

    const postItem1 = [
        {  date: 'Publié le 14 juin 2018', title: 'Le statut de Freelance', paragraph: 'Dans un précédent podcast on s\'était intéressé ' +
                'au métier de développeur web de manière générale mais aujourd\'hui je voulais me focaliser sur le statut de freelance en ' +
                'particulier. Plutôt que de faire une longue explication sur le statut, mon expér...' },
        {  date: 'Publié le 14 juin 2018', title: 'Le statut de Freelance', paragraph: 'Dans un précédent podcast on s\'était intéressé ' +
                'au métier de développeur web de manière générale mais aujourd\'hui je voulais me focaliser sur le statut de freelance en ' +
                'particulier. Plutôt que de faire une longue explication sur le statut, mon expér...' },
        {  date: 'Publié le 14 juin 2018', title: 'Le statut de Freelance', paragraph: 'Dans un précédent podcast on s\'était intéressé ' +
                'au métier de développeur web de manière générale mais aujourd\'hui je voulais me focaliser sur le statut de freelance en ' +
                'particulier. Plutôt que de faire une longue explication sur le statut, mon expér...' },
        {  date: 'Publié le 14 juin 2018', title: 'Le statut de Freelance', paragraph: 'Dans un précédent podcast on s\'était intéressé ' +
                'au métier de développeur web de manière générale mais aujourd\'hui je voulais me focaliser sur le statut de freelance en ' +
                'particulier. Plutôt que de faire une longue explication sur le statut, mon expér...' },
    ];

    postItem1.forEach(item => {
        const post = document.createElement('article');
        post.classList.add('article');

        const a = document.createElement('a');
        a.classList.add('article-img');
        a.href = "article.html";
        a.appendChild(createImageElement("./src/img/img.png"));
        const article_date = document.createElement('div');
        article_date.classList.add('article-date');
        article_date.textContent = item.date;
        const article_title = document.createElement('h2');
        article_title.classList.add('article-title');
        article_title.textContent = item.title;
        const p = document.createElement('p');
        p.classList.add('p');
        p.textContent = item.paragraph;

        post.appendChild(a);
        post.appendChild(article_date);
        post.appendChild(article_title);
        post.appendChild(p);
        content.appendChild(post);

    });
    main_content.appendChild(content);
    return main_content;
}
import {createImageElement} from "@/js/components/createImageElement.js";