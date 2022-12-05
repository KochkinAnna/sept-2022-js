// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(9, 'vasya', 'pupkin', 'vasok@gmail.com', '+380505678123'));
users.push(new User(5, 'anna', 'pupkin', 'anna@gmail.com', '+380507898123'));
users.push(new User(8, 'inna', 'kupil', 'inna@gmail.com', '+380503456789'));
users.push(new User(4, 'igor', 'dundel', 'igor@gmail.com', '+380508971423'));
users.push(new User(2, 'katya', 'smak', 'smak@gmail.com', '+380506458973'));
users.push(new User(6, 'artem', 'smak', 'smakar@gmail.com', '+380505348567'));
users.push(new User(7, 'ivan', 'poliman', 'polik@gmail.com', '+380503648967'));
users.push(new User(3, 'oksana', 'guculka', 'oksik@gmail.com', '+380507569234'));
users.push(new User(1, 'artur', 'grebonskyi', 'greba@gmail.com', '+380506815897'));
users.push(new User(10, 'yulia', 'grebonskyi', 'yulka@gmail.com', '+380504257869'));

console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(item => item.id % 2 === 0);
console.log(filterUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => a.id - b.id);
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client = [];

client.push(new Client(9, 'vasya', 'pupkin', 'vasok@gmail.com', '+380505678123',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550},
        {name: 'banana', price: '10', number: '20', sum: 200},
        {name: 'pear', price: '15', number: '20', sum: 300},
        {name: 'cocos', price: '20', number: '20', sum: 400},
        {name: 'pineapple', price: '100', number: '20', sum: 2000}]));
client.push(new Client(5, 'vasya', 'pupkin', 'vasok@gmail.com', '+380505678123',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(8, 'inna', 'kupil', 'inna@gmail.com', '+380503456789',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(4, 'igor', 'dundel', 'igor@gmail.com', '+380508971423',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(2, 'katya', 'smak', 'smak@gmail.com', '+380506458973',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(6, 'artem', 'smak', 'smakar@gmail.com', '+380505348567',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(7, 'ivan', 'poliman', 'polik@gmail.com', '+380503648967',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550}]));
client.push(new Client(3, 'oksana', 'guculka', 'oksik@gmail.com', '+380507569234',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550},
        {name: 'banana', price: '10', number: '20', sum: 200},
        {name: 'pear', price: '15', number: '20', sum: 300},
        {name: 'cocos', price: '20', number: '20', sum: 400}]));
client.push(new Client(1, 'artur', 'grebonskyi', 'greba@gmail.com', '+380506815897',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550},
        {name: 'cocos', price: '20', number: '20', sum: 400},
        {name: 'banana', price: '10', number: '20', sum: 200}]));
client.push(new Client(10, 'yulia', 'grebonskyi', 'yulka@gmail.com', '+380504257869',
    [{name: 'orange', price: '24', number: '25', sum: 600},
        {name: 'apple', price: '22', number: '25', sum: 550},
        {name: 'cocos', price: '20', number: '20', sum: 400}]));

console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = client.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.

function Car(model, manufacturer, year, maxspeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;
}

let car = new Car('audiSQ7', 'AG', 2021, '300 km', '4.0L V8 Twin Turbo');
console.log(car);

// додати в об'єкт функцію:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.maxspeed} на годину`;
};

console.log(car.drive());

// додати в об'єкт функцію:
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

Car.prototype.info = function () {

};

console.log(car.info());

// додати в об'єкт функцію:
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// додати в об'єкт функцію:
// -- changeYear (newValue) - змінює рік випуску на значення newValue

// додати в об'єкт функцію:
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car