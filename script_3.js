const cuadradoPromise = new Promise((resolve, reject) => {
    let num = 3;

    if (num) {
        resolve(cuadrado(num));
    } else{
        reject(rejected());
    }
});

function cuadrado(val) {
    return (val * val);
}

function rejected() {
    return ("Se rechaza la promesa");
}

cuadradoPromise
    .then((cuadrado) => {
        console.log(cuadrado);
    })
    .catch((message) => {
        console.log(message);
    });