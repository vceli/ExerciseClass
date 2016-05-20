var historial = []

function generarAleatorio(maximo) {
	var aleatorio
	var existe = true
	do {
		aleatorio = Math.floor(Math.random()*maximo)
		if (historial.length == maximo) {
			aleatorio = -1
			existe = false
		} else if (historial.length == 0) {
			historial.push(aleatorio)
			existe = false
		} else {
			var encontrado = historial.indexOf(aleatorio)
			if (encontrado < 0) {
				historial.push(aleatorio)
				existe = false 	
			} else {
				console.log("Se repite! -> " + aleatorio)
			}
		}
	} while (existe)
	return aleatorio
}

for (var i = 0; i < 20; i++) {
	var aleatorio = generarAleatorio(20)
	if (aleatorio == -1) console.log("Ya no hay más números disponibles")
	else console.log(aleatorio)
}

console.log(historial)