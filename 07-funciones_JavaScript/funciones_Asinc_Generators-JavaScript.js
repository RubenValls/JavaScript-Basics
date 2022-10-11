function siempreTrue(){
    return true;
}

function promesa(){
    console.log("Hola soy una promesa");
}

function* idPares(){
    let id = 2;
    while(true){
        yield id;
        id = id + 2;
    }
}

console.log(siempreTrue());

setTimeout(() => {console.log(promesa());}, "5000");

const generador = idPares();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());