let desarrollo = new Promise(function(resolve, reject) {
    //acciones necesarias para conseguir un resultado satisfactorio
    setTimeout(()=> {
        const protecto = "😎proyecto ok";
        let aleatorio = Math.random();
        if(aleatorio < 0,5)
            resolve(proyecto);
        else
            reject("no entregado a tiempo 🤨🤔");
    }, 1500);
});

desarrollo
    .then((proyecto) => console.log(proyecto))
    .catch((error) => console.log(error))
    .finally(() => console.log("terminando ... "));