import { suma, multiplica } from "./functions/controller.js";
import chalk from 'chalk';

let sumatoria = suma(4,5);
let multiplicacion = multiplica(1,2);

console.log(chalk.green("Suma: " + sumatoria + " y Multiplicación: " + multiplicacion));