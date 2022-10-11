let listaCompra = ["Macarrones", "Queso", "Espinacas", "Chocolate", "Pan", "Arroz", "Agua"];

listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

let listaPeliculas = [
    {
        titulo: "Yo, Robot",
        director: "Alex Proyas",
        anyo: 2004
    }, 
    {
        titulo: "Gladiator",
        director: "Ridley Scott",
        anyo: 2000
    },
    {
        titulo: "The Batman",
        director: "Matt Reeves",
        anyo: 2022
    }, 
    {
        titulo: "Joker",
        director: "Todd Phillips",
        anyo: 2019
    }
    ];

let peliculasRecientes = listaPeliculas.filter(peliculas => peliculas.anyo>2010);
console.log(peliculasRecientes);

let directores = listaPeliculas.map(peliculas => peliculas.director);
console.log(directores);

let titulos = listaPeliculas.map(peliculas => peliculas.titulo);
console.log(titulos);

let titulosYDirectores = titulos.concat(directores);
console.log(titulosYDirectores);

let titulosYDirectores2 = [...titulos,...directores];
console.log(titulosYDirectores2);



