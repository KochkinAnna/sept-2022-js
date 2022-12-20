// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-users-line');
        titleDiv.appendChild(icon);
        let h1Div = document.createElement('h1');
        h1Div.innerText = 'USERS';
        titleDiv.append(h1Div);
        let usersDiv = document.createElement('div');
        usersDiv.classList.add('users');

        for (const user of users) {

            let div = document.createElement('div');
            div.innerText = `${user.id} . ${user.name}`;
            div.classList.add('div', 'f-s', 'width', 'height');

            let button = document.createElement('button');
            button.classList.add('button', 'f-s', 'width', 'height');
            let a = document.createElement('a');
            a.innerText = 'To see user-details';
            a.href = 'index-user-details.html?id=' + user.id;
            a.setAttribute('target', '_blank');
            button.appendChild(a);
// /зробити так щоб коли наводиш на кнопку вона світилася
            usersDiv.append(div, button);
        }
        mainDiv.append(titleDiv, usersDiv);
        document.body.appendChild(mainDiv);
    });


