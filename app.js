let fs = require('fs');
let process = require('process');
let moduloTareas = require("./moduloTareas")

let listaDeTareas = moduloTareas.traerArrayDeTareas();


let stringTerminal = process.argv[2];
// console.log(process.argv)

switch(stringTerminal) {
    case 'listar':
        console.log ("")
        console.log("Este es el listado de tareas")
        console.log("-----------------------------")
        let listaParseada = moduloTareas.traerArrayDeTareas();
		listaParseada.forEach(function(elemento, posicion) {
			console.log(`${elemento.titulo} - ${elemento.estado}`);
		})
    break;
    case 'crear':
        let tituloDeLaTarea = process.argv[3];
        let laTarea = {
            titulo: tituloDeLaTarea,
            estado: "Pendiente"
        }
        moduloTareas.crearNuevaTarea(laTarea);
        console.log("La tarea fue creada con éxito")
        break;

    case 'filtrar':
        let estadoDeLaTarea = process.argv[3];
        moduloTareas.filtrarTareas(estadoDeLaTarea);
   break;
    
    default:
        console.log("Los comandos disponibles que tengo son: listar, crear y filtrar")
}