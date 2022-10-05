let numero = 10;
let resultado = numero;

while(numero){
    resultado *= numero-1;
    numero--;

    if(numero<=1){
        break;
    }
}

console.log(resultado);