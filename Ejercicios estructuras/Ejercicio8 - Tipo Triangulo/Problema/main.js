function triangulo() {
	var lado1 = parseInt(prompt("Ingresa 1er lado del triangulo:"));
	var lado2 = parseInt(prompt("Ingresa 2do lado del triangulo:"));
	var lado3 = parseInt(prompt("Ingresa 3er lado del triangulo:"));

	if(lado1==lado2 && lado1==lado3) {
		alert("El triangulo es Equilatero");
	}else if(lado1==lado2 || lado1==lado3 || lado2==lado3) {
		alert("El triangulo es Isósceles");
	}else if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3) {
		alert("El triangulo es Escaleno");
	}else {
		alert("Es rectangulo");
	}

}
triangulo();