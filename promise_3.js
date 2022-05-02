//https://bluuweb.github.io/desarrollo-web-bluuweb/11-09-js-promesas/#promesas

//https://jsonplaceholder.typicode.com/posts/

 

const posts = [{

    "userId": 1,

    "id": 1,

    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",

    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

},

{

    "userId": 1,

    "id": 2,

    "title": "qui est esse",

    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"

},

{

    "userId": 1,

    "id": 3,

    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",

    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"

},

];

const findPostById = (id) => {
    const post = posts.find((elemento) => elemento.id === id);

    // devolver la promesa

    return new Promise((resolve, reject) => {
        //resolve
        if(post){
            resolve(post);
        }else{
            reject("No encontrado por id: " + id);
        }
    });
};

findPostById(3)
    .then((post) => console.log(post))
    .catch((err) => console.log(err))
    .finally(() => console.log("fin de la promesa"));