function formatoDeterminante() {
	var total1 = 0;
	var total2 = 0;
	var total3 = 0;
	var a1 = prompt("Introduce a11:");
	var a2 = prompt("Introduce a12:");
	var b1 = prompt("Introduce a21:");
	var b2 = prompt("Introduce a22:");

	total1=a1*b2;
	total2=a2*b1;
	total3=total1-total2;
    
    alert('El producto de: '+'\n'+a1+' '+a2+'\n'+b1+' '+b2+'\n'+'es: '+'\n'+total3);
}
formatoDeterminante();


