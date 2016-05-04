function productoEscalar() {
	/*var vec1 = promp("Introduce el 1er vector");
	var vec2 = promp("Introduce el 2do vector");*/
	var total1 = 0;
	var total2 = 0;
	var total3 = 0;
	var a1 = prompt("Introduce 1er numero:");
	var a2 = prompt("Introduce 2do numero:");
	var b1 = prompt("Introduce 3er numero:");
	var b2 = prompt("Introduce 4to numero:");

	total1=a1*b1;
	total2=a2*b2;
	total3=total1+total2;

	alert('El producto de los vectores:'+'\n'+'('+a1+','+a2+') y ('+b1+','+b2+') es '+total3);
}
productoEscalar();



