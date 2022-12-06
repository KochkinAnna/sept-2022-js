// LESSON 8 Функції конструктори

function User(name, age, skills, wifeObj) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.wifeObj = wifeObj;
    this.greeting = function (msg, asd) {
        console.log(`${msg} my name is ${this.name}`)
    };
}

// let user1 = new User('vasya', 31, ['js', 'java'], {name: 'anna', age: 28});
// console.log(user1);
// let user2 = new User("kokos", 32);
// console.log(user2);
// console.log(user1.greeting('hi'));

let user1 = new User('vasya', 31, ['js', 'java'], {name: 'anna', age: 28});

let friend = {
    name: 'anton',
    age: 31,
    qwe: 'afsaagge'
}

// user1.greeting.call(friend, 'aloha'', 'qwe');
//
// user1.greeting.apply(friend, ['aloha', 'qwe']);

// let greetingCopy = user1.greeting.bind(friend);
// greetingCopy ('jghfhgkkjlglj');

// Array.prorotype.printSelf = function () {
//     console.log(this);
// };
// let numbers = [11, 22, 33];
// numbers.printSelf()


class UserPuser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

// можна написати name; age, натиснути alt insert ш вибрати constructor, воно саме побудує

    greeting() {
        console.log(`hello my name is ${this.name}`)
    }

    //
    // get name() {
    //     return this._name;
    // }
    //
    // get age() {
    //     return this._age;
    // }
    //
    //
    // set name(value) {
    //     this._name = value;
    // }
    //
    // set age(value) {
    //     this._age = value;
    // }
}


let userPuser = new UserPuser('vasya', 31);
console.log(userPuser);

class SuperUser extends UserPuser {

    constructor(name, age, skills) {
        super(name, age);
        this.skills = skills;
    }

}

let superUser = new SuperUser('vasya', 31, [11, 22, 33]);
superUser.greeting();

function Admin(login, password) {
    this.login = login;
    this.password = password;
}

function SuperAdmin(login, password, authority) {
    Admin.apply(this, arguments);
    this.authority = authority;
}
