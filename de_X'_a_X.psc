Algoritmo "Pasar_De_X1_X
	Escribir 'Texto para desencriptar'
	Leer caracteres de la cadena
	Leer cadena que mostrara el resultado
	Para i<-1 Hasta 1 Con Paso -1 Hacer
		Si comprueba si es vocal, espacio o coma Entonces
			a�ade caracter a la cadena del resultado en orden inverso
			A�ade la vocal despues de las consonantes
		SiNo
			a�ade el caracter a la cadena del resultado
		FinSi
	FinPara
	devuelve el resultado de la cadena nueva
FinAlgoritmo
