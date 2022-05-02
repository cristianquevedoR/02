function resolveAfter2seconds(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2seconds(20);
    const b = await resolveAfter2seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v); // prints 60 after 4 segunds
});

async function add2(x) {
    const p_a = resolveAfter2seconds(20);
    const p_b = resolveAfter2seconds(30);
    return x + await p_a + await p_b;
}

add1(10)
    .then(v => {
        console.log('add1 ' + v); //prints 60 after 4 segunds
    });
add2(10)
    .then(v => {
        console.log('add2 ' + v); //prints 60 after 2 segunds
    });