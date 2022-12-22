// /     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let post = url.searchParams.get('post');
console.log(post);
let parse = JSON.parse(post);
console.log(parse);

fetch('https://jsonplaceholder.typicode.com/users/${parse}/posts')
    .then((response) => response.json())
    .then(value => {
        for (const key in value) {
            let infoPost = document.createElement('div');
            infoPost.classList.add('div');
            let h2 = document.createElement('h2');
            h2.innerText = `${key}`;
            infoPost.appendChild(h2);
            document.body.append(infoPost);
        }
    });