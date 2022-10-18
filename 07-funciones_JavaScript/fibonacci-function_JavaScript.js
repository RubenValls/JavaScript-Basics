function fibonacci(num){
    let numero1 = 0;
    let numero2 = 1;
    let arrayNums = [numero1, numero2];

    for (let contador = 1; contador<num-1; contador++){
        let resultado = arrayNums[contador - 1] + arrayNums[contador];
        arrayNums.push(resultado);
    }

    return arrayNums;
}

console.log(fibonacci(8));