function listaValores() {
	var lista1 = 0;
	var valor = 0;
	var n;
	while(valor<3){
		n = parseInt(prompt("Ingrese numero: "));
		lista1+=n;
		valor+=1;
	}
	var lista2 = 0;
	var valor = 0;
	while(valor<3){
		n = parseInt(prompt("Ingrese 2do numero: "));
		lista2+=n;
		valor+=1;
	}if(lista1>lista2){
		document.write('Tiene mayor valor la lista 1');
	}else {
		if(lista1<lista2) {
		document.write('Tiene mayor valor la lista 2');
	
		}else{
		document.write('Las listas tienen el mismo valor');
		}
	}

}
listaValores();


