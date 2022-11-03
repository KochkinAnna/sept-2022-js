// - Створити масив, заповнити його 10 елементами будь-якого типу, вивести кожен елемент у консоль

let users = ['anna', 'vita', 'vasya', 'olya', 'adam', 'jenya', 'inna', 'serg', 'alex'];
console.log(users);
console.log(users.length);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
// users[9] = 'nastya';
// console.log(users);
users[users.length] = 'nastya'
console.log(users);
users[1] = 'vitaliy';
console.log(users);

// - Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр.

let book1 = {
    name: 'blackBeauty',
    pages: 222,
    genre: 'autobiography'
}

let book2 = {
    name: 'wineSimple',
    pages: 272,
    genre: 'manual'
}

let book3 = {
    name: 'whereRainbowsEnd',
    pages: 558,
    genre: 'novel'
}
console.log(book1, book2, book3)

// - Створити 3 об'єкти, які описують книги. Поля об'єкта : назва, кількість сторінок, жанр, автори. Поле "автори" - масив. Кожен автор має поля ім'я, вік

let book4 = {
    name: 'blackBeauty',
    pages: 222,
    genre: 'autobiography',
    author: [
        {
        name:'AnnaSewell',
        age: 58
    },
        {
            name:'JamesSewell',
            age: 60
        },
    ]
}

let book5 = {
    name: 'wineSimple',
    pages: 272,
    genre: 'manual',
    author: {
        name: 'AldoSom',
        age: 40
}
}

let book6 = {
    name: 'whereRainbowsEnd',
    pages: 558,
    genre: 'novel',
    author: {
        name:'CeceliaAhern',
        age: 41
    }
}

console.log(book4, book5, book6)

// console.log(book5['author'].name)

// - Створити масив з 10 об'єктами, які описують сутність "користувача". Поля: ім'я, ім'я користувача, пароль. Перейти в консоль пароля кожного користувача

let bigUsers = {
    user1: {
        name: 'Anna',
        username: 'kochkinAnna',
        password: 12345678
    },

    user2: {
        name: 'Vitaliy',
        username: 'vit564',
        password: 87654321
    },
    user3: {
        name: 'Vasya',
        username: 'vasyl',
        password: 45789
    },
    user4: {
        name: 'Olya',
        username: 'chorna',
        password: 9876
    },
    user5: {
        name: 'Adam',
        username: 'sendler',
        password: 8695979
    },
    user6: {
        name: 'Jenia',
        username: 'lovewv',
        password: 5533222
    },
    user7: {
        name: 'Inna',
        username: 'music',
        password: 468490
    },
    user8: {
        name: 'Serj',
        username: 'mentor',
        password: 356888
    },
    user9: {
        name: 'Alex',
        username: 'mentorJunior',
        password: 95657
    },
    user10: {
        name: 'Nastya',
        username: 'mentorJunior',
        password: 95657
    }
}

console.log(bigUsers);
console.log(bigUsers["user1"].password);
console.log(bigUsers.user2.password);
console.log(bigUsers["user3"].password);
console.log(bigUsers.user4.password);
console.log(bigUsers["user5"].password);
console.log(bigUsers.user6.password);
console.log(bigUsers["user7"].password);
console.log(bigUsers.user8.password);
console.log(bigUsers["user9"].password);
console.log(bigUsers.user10.password);