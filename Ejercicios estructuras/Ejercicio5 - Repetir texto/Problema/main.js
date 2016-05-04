function repetirTexto() {
	var numero = parseInt(prompt("¿Cuántas veces quieres que se repita el texto?"));
	var texto = prompt("Ingresa tu texto:");
	for (var i=1; i<= numero; i++) {
		document.write(texto+'</br>');
	}
	
}
repetirTexto();



