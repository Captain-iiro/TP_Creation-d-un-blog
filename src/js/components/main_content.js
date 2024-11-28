export function main_content() {
    const main_content = document.createElement('div');
    main_content.classList.add('main1');

    const post = document.createElement('div');
    post.classList.add('post');



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
        const contentItem1 = document.createElement('div');
        contentItem1.classList.add('content-item1');
        const div_img = document.createElement('div');
        div_img.classList.add('div_img');
        contentItem1.appendChild(div_img);

        const contentItem2 = document.createElement('div');
        contentItem2.classList.add('content-item2');
        const span_date = document.createElement('span');
        span_date.classList.add('span_date');
        span_date.textContent = item.date;
        const h2 = document.createElement('h2');
        h2.classList.add('h2');
        h2.textContent = item.title;
        const p = document.createElement('p');
        p.classList.add('p');
        p.textContent = item.paragraph;
        contentItem2.appendChild(span_date);
        contentItem2.appendChild(h2);
        contentItem2.appendChild(p);

        const posts = document.createElement('div');
        posts.classList.add('posts');
        posts.appendChild(contentItem1);
        posts.appendChild(contentItem2);
        post.appendChild(posts);
    });



    const Sidebar = document.createElement('div');
    Sidebar.classList.add('sidebar');

    const ul = document.createElement('ul');
    ul.classList.add('ul');
    const title2 = document.createElement('h2');
    title2.classList.add('title');
    title2.textContent = "Catégories";
    const partie1 = document.createElement('div');
    partie1.classList.add('partie1');
    partie1.appendChild(title2);
    partie1.appendChild(ul);
    Sidebar.appendChild(partie1);

    // Add this array for categories
    const categories = [
        'High-Tech',
        'Concentré du Web',
        'À propos',
        'Astuces pour développeurs',
        'Ressources',
        'Bonnes pratiques'
    ];

// Replace the existing li creation with this loop
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('li');
        const a = document.createElement('a');
        a.classList.add('a');
        a.textContent = category;
        li.appendChild(a);
        ul.appendChild(li);
    });





    main_content.appendChild(post);
    main_content.appendChild(Sidebar);


    return main_content;
}