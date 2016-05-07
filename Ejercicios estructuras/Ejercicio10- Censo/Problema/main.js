function censoProvincial() {
	do{
		var dni = parseInt(prompt("Ingrese numero de DNI:"));
		// );

		var total = 0;
		var totalH = 0;
		var totalM = 0;
		if(dni===0){
			alert('El programa se detuvo');
		}else{
			document.write(dni+'</br>');
			var edad = parseInt(prompt("Ingrese edad: ")
			document.write(edad+'</br>');
			var sexo = parseInt(prompt("Ingrese sexo (Femenino o masculino): "));
			document.write(sexo+'</br>');
		}
		
	}while(dni!=0);
} 
censoProvincial();



