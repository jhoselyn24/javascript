function multiplos11() {
	var suma = 0;
	var total = '';

	for(var m=11;m<=3000;m++) {
		total += suma+'';
		suma += m;
	}
	alert(total+'\n'+'La suma de todos los multiplos es: '+suma);
}
multiplos11();



