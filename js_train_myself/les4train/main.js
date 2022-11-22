// LESSON 4. Increments, decrements. LOOPS

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
// ];
//
// console.log(users.length); -11

// for (let user of users) {
//     console.log(user);
// }
// console.log(users.length); -11

// for (let user of users) {
//     document.write(`<div>
//     <h3>${user.name} </h3>
//     <p> ${user.age} ${user.status}</p>
//     </div>`);
// }

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (let product of products) {
//     document.write(`<div>
// <h2>${product.title} ${product.price}</h2>
// <img src="${product.image}" alt="${product.title}">
// </div>`)
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
// ];

// for (let user of users) {
// if (!user.status) {
//     document.write(`<div>
//     <h3>${user.name} </h3>
//     <p> ${user.age} ${user.status}</p>
//     </div>`);
// }
// }

// let x = 0:
// x = x + 1;
// x += 1; - збільшує а скільки захочеш
// X ++; - збільшує тільки на одиницю

// let x = 0:
// X ++;
// console.log(x); - 1
// x--;
// console.log(x); - 0
// ++x;
// console.log(x); - 1
// --x;
// console.log(x); - 0
//
// console.log(x++); - 0
// console.log(x); - 1
//
// console.log(++x); - 1
// console.log(x); - 1

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
// ];

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     console.log(user);
// }

// for (let i = 3; i < users.length-2; i+=2) {
//     let user = users[i];
//     console.log(user);
// }

// for (let i = Math.floor (users.length/2); i < users.length-; i++) {
//     let user = users[i];
//     console.log(user);
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
// if (user.age>30) {
//     console.log(user);
// }
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);
// }

// let users = {name: 'vasya', age: 31, status: false};
// for (const fieldy in users) {
//     console.log(field, field['name']);
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
// ];
//
// for (const user of users) {
//     for (const userKey in user) {
//         console.log(userKey, user[userKey])
//     }
//     console.log('-------');
// }
// let i=0;
// while (i<users.length) {
//     let user = users [i];
//     if (user.status) {
//     console.log(user); }
//     i++;
// }

// do {
//     console.log('sgsgsgsg')
// } while (
//     false
//     )