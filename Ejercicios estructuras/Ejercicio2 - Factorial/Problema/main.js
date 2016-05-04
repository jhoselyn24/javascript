function factorial(argument) {
	var numero = parseInt(prompt("Introduce un numero entero:"));
	var respuesta = 1;

	for(var i=1;i<=numero;i++) {
		respuesta*=i;
	}
	alert("El factorial del numero ingresado es: "+respuesta);
}
factorial();

