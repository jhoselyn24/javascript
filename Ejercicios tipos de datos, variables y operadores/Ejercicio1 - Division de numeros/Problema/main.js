/*function division() {
	var numero = parseInt(prompt("Ingresa un dividendo: "));
	var total = 0;
	var number = parseInt(prompt("Ingrese un divisor:"));
	if(number===0){
		alert('Ingrese divisor diferente a cero');
		var number = parseInt(prompt("Ingrese un divisor:"));
		total = numero/number;
		alert("La respuesta es: "+total);
	}
	else{
		total = numero/number;
		alert("La respuesta es: "+total);}
			
	
}
division();*/
var total = 0;
var numero = parseInt(prompt("Ingresa un dividendo: "));
do{
	var number = parseInt(prompt("Ingrese un divisor:"));
	if (number===0) var number = parseInt(prompt("Ingrese un divisor:"));
	else{
	total=numero/number;
	alert("la respuesta es: "+total);}

}while(number!=0);



