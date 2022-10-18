export class Estudiante{
    constructor(){
        this.nombre = "Rubén";
        this.asignaturas = ["JavaScript", "HTML", "CSS"]; 
    }

    getInfo(){
        let estudiante = new Estudiante();
        return estudiante;
    }

    print(){
        console.log(`Mi nombre es ${this.nombre} y se programar en: ${this.asignaturas}`);
    }
}