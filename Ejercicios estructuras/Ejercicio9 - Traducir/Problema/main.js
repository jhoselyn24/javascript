function traduciendoPalabras() {
	var texto = prompt("Ingresa un texto y lo traducimos: ");
	switch(texto){
		case "casa":
			document.write("house");
			break;
		case "mesa":
			document.write("table");
			break;
		case "perro":
			document.write("dog");
			break;
		case "gato":
			document.write('cat');
			break;
		default:
			alert('No se puede traducir');
			break;
	}
}
traduciendoPalabras();


