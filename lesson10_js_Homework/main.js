// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
//


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = `${user.id} ${user.name}`;
            div.appendChild(a);

            document.body.appendChild(div);
        }
    });

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

fetch('http://jsonplaceholder.typicode.com/users/' + id)
    .then(resp => resp.json())
    .then(details => {
        let {data: userData} = details;
        let divDetails = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerText = `${userData.id} ${userData.name}`;
        let p1 = document.createElement('p');
        p1.innerText = `Adress: ${userData.address.street}, ${userData.address.suite}, 
        ${userData.address.city}, ${userData.address.zipcode},
            GEO: ${userData.address.geo.lat}, ${userData.address.geo.lng}`;
        let p2 = document.createElement('p');
        p2.innerText = `phone: ${userData.phone}, website:${userData.website}`;
        let p3 = document.createElement('p');
        p3.innerText = ` company: ${userData.company.name}, catchPhrase: ${userData.company.catchPhrase}, bs: ${userData.company.bs}`;
        divDetails.append(h2,p1,p2,p3);
        document.body.appendChild(divDetails);
    })
