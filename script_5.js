let compras = "🛒";
function hacerCompra(){
    return new Promise((resolve, reject) => {    
        if (compras.length < 8){
        setTimeout(() => {
            compras += "😁";
            console.log(compras);
            resolve();
        }, 1500);
    }else{
        reject("No se puede realizar mas de 3 compras")
        }
    });
}

hacerCompra()
    .then(() => hacerCompra())
    .then(() => hacerCompra())
    .then(() => hacerCompra())
    .then(() => hacerCompra())
    .then(() => hacerCompra())
    .catch((error) => console.log(error))
    .finally(() => console.log("terminando ... "));