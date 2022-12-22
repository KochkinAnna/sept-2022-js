// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//

let apiURL = 'https://jsonplaceholder.typicode.com/users/';
let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(apiURL + id)
    .then(value => (value.json())
        .then(value => {
            let userData = value;
            let title = document.createElement('div');
            title.classList.add('title', 'pad-l', 'marg-t');
            let h1 = document.createElement('h1');
            h1.innerText =
                `${userData.id}. ${userData.name}`;
            title.appendChild(h1);
            let infoButt = document.createElement('div');
            infoButt.classList.add('infoButt');
            let divDetails = document.createElement('div');
            divDetails.classList.add('divDetails', 'pad-l', 'marg-t');
            let p = document.createElement('p');
            p.innerHTML =
                `<b>username:</b> ${userData.username}, <b>e-mail:</b> ${userData.email}`;
            let p1 = document.createElement('p');
            p1.innerHTML =
                `<b>adress:</b> ${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode},
                 <b>geo:</b> ${userData.address.geo.lat}, ${userData.address.geo.lng}`;
            let p2 = document.createElement('p');
            p2.innerHTML =
                `<b>phone:</b> ${userData.phone}, <b>website:</b> ${userData.website}`;
            let p3 = document.createElement('p');
            p3.innerHTML =
                `<b>company:</b> ${userData.company.name}`;
            let p4 = document.createElement('p');
            p4.innerHTML =
                `<b>catch phrase:</b> ${userData.company.catchPhrase}, 
                <b>bs:</b> ${userData.company.bs}`;
            divDetails.append(p, p1, p2, p3, p4);

            let button = document.createElement('button');
            button.innerText = 'to see posts of user';
            button.classList.add('menu-btn', 'marg-t');
            button.onclick = function () {
                fetch(apiURL + id + '/posts')
                    .then((response) => response.json())
                    .then(value => {
                        let nav = document.createElement('nav');
                        let ul = document.createElement('ul');
                        ul.classList.add('titlePosts');
                        for (const post of value) {
                            let li = document.createElement('li');

                            let a = document.createElement('a');
                            a.innerText = `${post.title}`;
                            a.classList.add('posts')
                            a.href = 'index-user-details-post.html?post=' + JSON.stringify(post);
                            a.setAttribute('target', '_blank');
                            ul.appendChild(li);
                            li.appendChild(a);
                        }
                        nav.appendChild(ul);
                        button.appendChild(nav);
                    })

            }
            infoButt.append(title,divDetails, button);
            document.body.append(title, infoButt);

        }));




// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)