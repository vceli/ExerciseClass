var boton = document.getElementById("boton")
boton.addEventListener("click", mostrarMensaje)

function mostrarMensaje() {
	var mensaje = document.getElementById("mensaje").value;
	var div = document.createElement("div")
	div.innerHTML = mensaje
	div.addEventListener("click", alertMensaje)
	var contenedor = document.getElementById("contenedor")
	contenedor.insertBefore(div, contenedor.childNodes[0])
}

function alertMensaje() {
	alert(this.textContent);
}