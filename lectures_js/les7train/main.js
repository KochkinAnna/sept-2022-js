// LESSON 7

// let a;
// console.log(a.name);
// console.log('end');

// Обробка помилок - error handling

// TRY CATCH

// function foo(obj) {
//         console.log(obj.name);
// }
// foo();
//
// function foo(obj) {
//     try {
//         console.log(obj.name);
//     } catch (thisiserror) {
//         console.error(thisiserror);
//     }
//     console.log('end')
// }
// foo();

// THROW NEW

// function divider(a, b) {
//     if (b === 0) {
//        throw new Error('B is Zero')
//     }
//     return a / b;
// }
// console.log(divider(10,0));

// function divider(a, b) {
//     if (b === 0) {
//         throw new Error('B is Zero')
//     }
//     return a / b;
// }
//
// try{
//     divider(10,0);
// } catch (thisiserror) {
//     console.log(thisiserror);
//     console.log(divider(10,2));
// } finally {
//     console.log('sgshyjuk');
// }

// напівзамінка траю ? optional chain operator - одноокий елвіс/ гно
// ігнорує наступну характеристику якщо там помилка андефайнд
// let user = {
//     name: 'jnknlkn';
// }
// console.log(user?.name);
// console.log(user?.wife?.age);

// ________ЗБИРАТИ І РОЗБИРАТИ ОБ'ЄКТИ_______

// let name = 'vasya';
// let age = 31;
// let user = {
//     name: name,
//     age:age
// }
//
// якщо характеристика обєкту має таку саме назву як змінна з якої ми беремо значення, то ми пишемо
// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age
// }

// Як ми можемо розібрати об'єкти на складові частинки
//
// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'olya',
//         age: 32
//     }
// }
// let{age,name}=user;// let age, let name
// console.log(age,name);

// let {age, name, wife, wife: {name:wName, age:wAge}} = user;
// console.log(age, name, wife, wAge, wName);

// let user = {
//     name: 'kokos',
//     age: 31
//     }
// }
//
// let user2 =user;
// - змінюючи юзер2 ми змінюємо і юзера
//
// якщо так не хочемо і хочемо робити все що хочеш тільки з копією юзер 2 то пишемоЖ
// ПОВЕРХНЕВА КОПІЯ:
// let user = {
//     name: 'kokos',
//     age: 31
// }

// let user2 = {...user}; - спредоператор

// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'anna',
//         age: 32
//     },
//     skills: ['html', 'js']
// }
//
// let user3 = {...user,status:true,name:'abrikos'};
// console.log(user3);
//
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
//
// ];
//
// console.log(users.map ((value,index) => ({...value,id: index +1})));


// НЕПОВЕРХНЕВА КОПІЯ: JSON - JavaScript object notation
//
// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {
//         name: 'anna',
//         age: 32
//     },
//     skills: ['html', 'js']
// }
//
// let stringify = JSON.stringify(user);
// console.log(stringify);  - поверне нам обєкт який виглядає як юзер, але стрінгоюю
//
// як тепер конвертнути зі стрінги в обєкт:
//
// let parse = JSON.parse(stringify);
// console.log(parse);
//
// function copyCentr(obj) {
//     let s = JSON.stringify(obj);
//     let p = JSON.parse(s);
//     return p;
// }
//
// або
//
// function copyCentr(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
//
// або
//
// const copy =(obj) => JSON.parse(JSON.stringify(obj));
//


// _______________________________________
// let user = {
//     name: 'kokos',
//     age: 31,
// }
// user.age= 'dog';
//
// function userBielder (name,age){
//     return {name,age}
// }
// let user1 = userBielder ('vasya',31);
// console.log(user1);
// user1.age = 'cat';
// console.log(user1);
//
// ми пишемо
// ЗАМИКАННЯ, ІНКАПСУЛЯЦІЯ
// function userBielder (name,age){
//    let user = {name,age}:
//     return {
//        setAge:function (newAge) {
//            if (typeof newAge === "string"){
//                throw new Error ('newAge must be a num type')
//            } else {
//                user.age = newAge;
//            }
//        },
//         user:function () {
//             return {...user}
//         },
//     };
// }
//
// let builder = userBielder ('asd',123));
// builder.setAge(100);
// console.log(builder.user());

