let persona = {
    nombre: "Rubén",
    apellido: "Valls Aparici",
    edad: 28,
    altura: 188,
    eresDesarrollador: true
};

let edad = persona.edad;
console.log(edad);

let listaAmigos = [persona, 
                    {
                        nombre: "Aitor", 
                        apellido: "Fuentes López",
                        edad: 30,
                        altura: 170,
                        eresDesarrollador: true
                    }, 
                    {
                        nombre: "Ximo", 
                        apellido: "Molina López",
                        edad: 29,
                        altura: 188,
                        eresDesarrollador: false
                    }];
console.log(listaAmigos)

let listaOrdenada = listaAmigos.sort((a,b) => a.edad-b.edad);
console.log(listaOrdenada)