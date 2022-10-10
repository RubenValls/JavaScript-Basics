var nombre = 'Rubén';
var apellido = 'Valls Aparici';
var estudiante = nombre.concat(" ",apellido);
var estudianteMayus = estudiante.toLocaleUpperCase();
var estudianteMinus = estudiante.toLocaleLowerCase();
var nletras = estudiante.length;
var primera = nombre.charAt(0);
var ultima = apellido.charAt(apellido.length-1);
var sin_espacios = estudiante.replace(/\s+/g, '');
var contiente = estudiante.includes(nombre);

console.log(nombre, apellido, estudiante, estudianteMayus, estudianteMinus, nletras, primera, ultima, sin_espacios, contiente);