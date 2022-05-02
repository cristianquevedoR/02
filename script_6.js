import fetch from "node-fetch";
const API="https://swapi.dev/api/films/"

async function findPostById(url){
    const response = await fetch(url);
    const json = await response.json();
    //*const post = json.find((elemento)=> elemento.id === id);
    const post = json;

   return new Promise((resolve,reject)=>{
       if(post){
           resolve(post);
       }else{
           reject("No encontrado por id: " + id)
       }
   })

}
findPostById(API)
    .then((json)=>{
        console.log(`titulo: ${json.results[0].title}`);
        console.log(`director: ${json.results[0].director}`);
        console.log(`producer: ${json.results[0].producer}`);
        findPostById(json.results[0].characters[0])
            .then((json2)=> {
                console.log(`Personaje: ${json2.name}`);
            })
            .finally(()=> console.log("final de la promesa"))
    })
    .catch((err)=> console.log(err))
    