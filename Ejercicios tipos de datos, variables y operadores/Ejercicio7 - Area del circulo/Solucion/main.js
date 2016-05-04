function areaCirculo() {
	var radio = parseInt(prompt("Ingrese el radio:"));
	var area = (radio*(Math.pow(Math.PI,2))).toFixed(2);

	alert("El area del circulo es: "+area); 
}
areaCirculo();




