let nombre=prompt("Ingrese el nombre del trabajador")
let sueldo=+prompt("Ingrese su sueldo")
let numHijos=+prompt("Ingrese la cantidad de hijos")
let bono=0.07*sueldo

if(numHijos>0){
   sueldofinal=sueldo+bono;
    alert(nombre + " " + "usted tiene " + numHijos + " hijos.Por lo tanto su sueldo final es: S/. " + sueldofinal
    );
} else{
    alert(nombre+" ,su sueldo es: S/. "+ sueldo+" .No hay bonificación porque no tiene hijos")
}