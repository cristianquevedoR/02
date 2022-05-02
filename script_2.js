const cuadradoPromise = new Promise((resolve, reject) => {
    let num = 0;

    if (num) {
        resolve(num * num);
    } else{
        reject('Se rechaza la promesa');
    }
});

cuadradoPromise
    .then((cuadrado) => {
        console.log(cuadrado);
    })
    .catch((message) => {
        console.log(message);
    });