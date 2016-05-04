function conversionDeEdad() {
	var nombre = prompt("¿Cuál es tu nombre?");
	var edad = parseInt(prompt("¿Cuál es tu edad?"));
	var dias = 365;
	var vida = 0;

	vida = edad*dias;
	alert(nombre+" has vivido hasta ahora "+vida+" días");
}
conversionDeEdad();



