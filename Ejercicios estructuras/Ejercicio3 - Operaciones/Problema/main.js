function operacionesMatematicas() {
	var n1 = parseInt(prompt("Introduce un numero:"));
	var n2 = parseInt(prompt("Introduce 2do numero:"));
	var total1 = 0;
	var total2 = 0;
	var total3 = 0;
	var total4 = 0;

	if(n1>n2){
		total1=n1+n2;
		total2=n1-n2;

		alert('El 1er numero es mayor que el segundo,'+'\n'+'la suma es: '+total1+'\n'+'la resta es: '+total2);
	}else if(n1 === n2) {
		alert("Los numeros son iguales, intentalo nuevamente");
	}else{
		total3=n1*n2;
		total4=(n1/n2).toFixed(2);
		alert("La multiplicacion es: "+total3+'\n'+'La division es: '+total4);
	}
}
operacionesMatematicas();



