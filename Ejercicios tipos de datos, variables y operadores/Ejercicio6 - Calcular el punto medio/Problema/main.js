function puntoMedio() {
	var total1 = 0;
	var total2 = 0;
	var a1 = parseInt(prompt("Introduce 1er numero (coordenada 1):"));
	var a2 = parseInt(prompt("Introduce 2do numero (coordenada 1):"));
	var b1 = parseInt(prompt("Introduce 1er numero (coordenada 2):"));
	var b2 = parseInt(prompt("Introduce 2do numero (coordenada 2):"));

	total1=(a1+b1)/2;
	total2=(a2+b2)/2;

	alert('El punto medio del segmento de extremos, los puntos:'+'\n'+'('+a1+','+a2+') y ('+b1+','+b2+') es ('+total1+','+total2+')');

}
puntoMedio();



