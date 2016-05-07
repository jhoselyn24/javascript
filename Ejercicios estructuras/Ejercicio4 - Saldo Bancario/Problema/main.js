function saldoBancario() {
	var suma = 0;
	do{
		var cuenta = parseInt(prompt("Ingrese numero de cuenta:"));
		document.write('<br> ============================= ');
		document.write(cuenta)
		if(cuenta<0){ 
			alert("Se ha detenido este programa");
		}else{
			var nombre = prompt("Ingrese nombre del cliente:");
			document.write('<br>'+nombre);
			var estadoCuenta = parseInt(prompt("Ingrese estado de cuenta:"));
			suma+=estadoCuenta;
			if(estadoCuenta>0){
			document.write("<br> Usted es acreedor de "+estadoCuenta);
			}else if(estadoCuenta===0){
			document-write("<br> Su estado de cuenta es nulo");
			}else {
			document.write('<br> Usted es deudor de '+estadoCuenta);
			}
		}
	}while(cuenta>0);
	document.write('El total del saldo de los acreedores es: '+suma+' soles.');
}
saldoBancario();