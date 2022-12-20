// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let apiURL = 'https://jsonplaceholder.typicode.com/users';
let url = new URL(location.href);
url.searchParams.get('id');

fetch(apiURL + id)
    .then((response) => response.json())
    .then(details => {
        let {data: userData} = details;
        let divDetails = document.createElement('div');
        divDetails.classList.add('userDetails');
        let h1 = document.createElement('h1');
        h1.innerText =
            `${userData.id} ${userData.name}`;
        let p = document.createElement('p');
        p.innerText =
            `username: ${userData.username}, e-mail: ${userData.email}`;
        let p1 = document.createElement('p');
        p1.innerText =
            `adress: ${userData.address.street}, ${userData.address.suite}, 
        ${userData.address.city}, ${userData.address.zipcode},
             GEO: ${userData.address.geo.lat}, ${userData.address.geo.lng}`;
        let p2 = document.createElement('p');
        p2.innerText =
            `phone: ${userData.phone}, website:${userData.website}`;
        let p3 = document.createElement('p');
        p3.innerText =
            `company: ${userData.company.name}, catchPhrase: ${userData.company.catchPhrase}, bs: ${userData.company.bs}`;
        divDetails.append(h1, p, p1, p2, p3);
        document.body.appendChild(divDetails);
    });


// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)