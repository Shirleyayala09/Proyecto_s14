let F=+prompt("Ingrese grados Fahrenheit")

let pasarCelsius= (grado)=>{
    return(Celsius=(grado-32)* (5/9))
}

 
alert("Al convertir " + F+ " grados Fahrenheit a Celsius se obtiene: "+ pasarCelsius(F).toFixed(2) +"°C");

let C=+prompt("Ingrese grados °C")

let pasarFarenheit= (grado)=>{
    return(Farenheit= grado*1.8 +32)
}

 
alert("Al convertir " + C+ " grados Celsius a Fahrenheit  se obtiene: "+ pasarFarenheit(C).toFixed(2) +"F");
