let fs = require('fs');

let moduloTareas = {
	traerArrayDeTareas: function() {
		let listaDeTareas = fs.readFileSync('tareas.json', 'UTF-8');
		return JSON.parse(listaDeTareas);
	},
	crearNuevaTarea: function(laTarea) {
    let listaParseada = this.traerArrayDeTareas();
    listaParseada.push(laTarea)
    let listaComoJSON = JSON.stringify(listaParseada);
    fs.writeFileSync('tareas.json', listaComoJSON);
	},
	filtrarTareas: function (estadoDeLaTarea) {
		if (estadoDeLaTarea == "Pendientes"){
			function enEstadoPendiente(x) {
				console.log("")
				console.log("Estas son tus tareas pendientes")
				console.log("-------------------------------")
			
				let tareasFiltradas = x.filter(function(elemento) {
					return elemento.estado == "Pendiente"
				})
			
				let contador = 1;
				for(let elemento of tareasFiltradas) {
					console.log(`${contador}. ${elemento.titulo}`)
					contador++;
				}
	
			
			}
			console.log(enEstadoPendiente(this.traerArrayDeTareas()));
	
		} else if (estadoDeLaTarea == "Terminadas"){
			function enEstadoTerminado(x) {
				console.log("")
				console.log("Estas son tus tareas terminadas")
				console.log("-------------------------------")
			
				let tareasFiltradas = x.filter(function(elemento) {
					return elemento.estado == "Terminada"
				})
			
				let contador = 1;
				for(let elemento of tareasFiltradas) {
					console.log(`${contador}. ${elemento.titulo}`)
					contador++;
				}
	
			
			}
			console.log(enEstadoTerminado(this.traerArrayDeTareas()));
		} else {
			console.log("No reconozco ese comando, por favor ingresá Pendientes o Terminadas entre comillas luego de la palabra filtrar.")
		}
	}
}
	


module.exports = moduloTareas;
