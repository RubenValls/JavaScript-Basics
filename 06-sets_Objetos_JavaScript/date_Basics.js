let fechaHoy = new Date();
console.log(fechaHoy);

let fechaNacimiento = new Date("May 2, 1994 12:00:00");
console.log(fechaNacimiento)

let comparacion = fechaHoy > fechaNacimiento; 
console.log(comparacion);

let mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);