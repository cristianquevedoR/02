const myPromise = new Promise((resolve, reject) => {
    let condition = false;

    if (condition) {
        resolve('La promesa se resuelve con éxito.');
    } else{
        reject('Se rechaza la promesa');
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });