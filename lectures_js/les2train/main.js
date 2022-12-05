// LESSON 2.Array.Objects.
// Arrays base. Array in array. Objects create. Embeded objects. Array og objects. Add fields to object. Refs vs primitives.
//
//     індекси     0     1     2         3
// елементи (довж) 1     2     3         4
// let arr = [100500, true, 'dsgsdh', [11,23,45]; - масив, можна запхати що завгодно
// console.log(arr);

// console.log(arr.length); - подивитись довжину - 4

// console.log(arr.length/2); - 2

// console.log(arr[1]); - true
// console.log(arr[2]); - 'dsgsdh'
// arr[4] = 'hello'; - [100500, true, 'dsgsdh', [11,23], 'hello'] - додали hello

// arr[0] = 100600; - [100600, true, 'dsgsdh', [11,23], 'hello'] - перевизначили 100500 на 100600

// як записати щось в кінець
// console.log(arr.length); - 6
// arr[6] = 'new value';  - [100500, true, 'dsgsdh', [11,23], 'hello', 'new value'] - додали new value
// Довжина завжди більша на 1 чим індекс!!!

// let arr = [100500, true, 'dsgsdh', [11,23,45]]; - двовимірний масив (бо є масив в масиві)
// let arr = [100500, true, 'dsgsdh', [11,23,45]];
// arr[3] = [11,23];
// let innerArr = arr[3];
// console.log(innerArr); - [11,23,45]
// console.log(innerArr[1]); - 23
// або
// console.log(arr[3]); - [11,23,45]
// console.log(arr[3][1]); - 23

// OBJECTS

// let user1ID = 1;
// let user1Name = 'vasya';
// let user1SurName = 'pupkin';
//
// а треба:
//
// let user = {
//     id:1,               - ключ (field, property,характеристика, поле): значення
//     name: 'vasya',
//     age: 32,
//     status: true
//     wife: {
//     name: Anna,
//     age: 28
//     }
// }
// console.log(user); - {id:1, name: 'vasya', age: 32, status: true}

// console.log(user.id); - 1
// console.log(user['id']); - 1 - краще - динамічніше
// console.log(user['wife']); - {name: Anna, age: 28}  embeded, childobject (вбудований, внутрішній) об'єкт
// console.log(user['wife']['name']); - Anna
// user ['skills'] = ['js', 'html'] - додали поле з значенням
// console.log(user['skills'][1]) - html

// ARRAY OF OBJECTS

// let friend1 = {name: 'vasya', age: 19};
// let friend2 = {name: 'petya', age: 20};
// let friend3 = {name: 'olya', age: 21};
// let friend4 = {name: 'masha', age: 19};
// let friend5 = {name: 'anton', age: 20};
//
// let party = [friend1, friend2, friend3]
// або
// let party = [
//     {name: 'vasya', age: 19},
//     {name: 'petya', age: 20},
//     {name: 'olya', age: 21},
//     {name: 'masha', age: 19},
//     {name: 'anton', age: 20, skills: ['html', 'css', 'js']}
// ]

// console.log(party[2]['age']); - 21
// console.log(party[4]['skills'][2]); - js

// примітивний тип

// let i = 0;
// x = i; ---- і дає тільк своє значення х, а не дає собою керувати
// console.log(x); - 0
// console.log(i); - 0
// x = 100;
// console.log(x); - 100
// console.log(i); - 0

// референціальний тип:
// let user = {id: 1, name: 'kokos'};
// console.log(user); - {id: 1, name: 'kokos'}
// let customer = user; - робимо псевдонім, тобто не змінюємо то той самий юзер (як ярлик)
// console.log(customer); - {id: 1, name: 'kokos'}
// customer['age'] = 31
// console.log(customer);  - {id: 1, name: 'kokos', age: 31}
// console.log(user);   - {id: 1, name: 'kokos', age: 31}

// console.log(typeof {}); - object
// console.log(typeof []); - object
// console.log(Array.isArray({})); - false
// console.log(Array.isArray([])); - true