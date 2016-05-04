function Contadores() {
	var numero = parseInt(prompt("Introduce un numero: "));
	var con1 = 5;
	var con2 = 21;
	var con3 = 4;
	var res1 = 0;
	var res2 = 0;
	var res3 = 0;

	res1=numero+con1;
	res2=res1+con2;
	res3=res2-con3;
	alert('Número introducido: '+numero+'\n'+'Contadores: '+res1+' - '+res2+' - '+res3);
}
Contadores();



