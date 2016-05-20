$(function() {
	$("#boton").click(enviarMensaje);
	$(document).on("click", ".ocultar", ocultarMensaje);
	$("#mensaje").mouseenter(dentroElemento);
	$("#mensaje").mouseleave(fueraElemento);
	$("#mensaje").keydown(teclaPresionada);
	$("#mensaje").keyup(teclaSoltada);
	$("#formulario").submit(peticionServidor);
	$("#input").change(cambiaValor);
});

function enviarMensaje() {
	var mensaje = $("#mensaje").val();
	$("#contenedor").append("<div>" + mensaje + "<button class='ocultar'>Ocultar</button></div>")
}

function ocultarMensaje() {
	$(this).parent().remove();
}

function dentroElemento() {
	console.log("Mouse dentro del textarea");
}

function fueraElemento() {
	console.log("Mouse fuera del textarea");
}


function teclaPresionada(event) {
	console.log("Key down: " + event.which)
}

function teclaSoltada() {
	console.log("Key up: ")	
}

function peticionServidor(event) {
	event.preventDefault();
	alert("Enviando petición al servidor!");
}

function cambiaValor() {
	alert("Cambió el valor del input!");
}