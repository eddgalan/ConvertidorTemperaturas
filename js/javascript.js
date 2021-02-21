 function convertir(){
	 var num1=parseInt(document.getElementById("num1").value);
	 var resultado;
	 var opcion=parseInt(document.getElementById("opciones").value);
	 if(validar(num1)){
		 switch(opcion){
			 case 0:
			 alert("Seleccione una opcion por favor");
			 break;
			 case 1://Celcius a Fahrenheit
			 resultado=num1+273.15;
			 break;
			 case 2://Celcius a Fahrenheit
			 resultado=num1*(1.8)+32;
			 break;
			 case 3://Fahrenheit a Celcius
			 resultado=((num1-32)*5)/9;
			 break;
			 case 4://Fahrenheit a Kelvin
			 resultado=(((num1-32)*5)/9)+273.15;
			 break;
			 case 5://Kelvin a Celcius
			 resultado=num1-273.15;
			 break;
			 case 6://Kelvin a Fahrenheit
			 resultado=((((num1-273.15)*9))/5)+32;
			 break;
		 }
		 document.getElementById("resultado").value=resultado;
	 }else{
		 alert("Inserte un dato numerico");
		 document.getElementById("opciones").selectedIndex="0";
	 }
 }

//Funcion para validar datos ingresados por el usuario
function validar(num1){
	if(isNaN(num1)){
		return false;
	}else{
		return true;
	}
}