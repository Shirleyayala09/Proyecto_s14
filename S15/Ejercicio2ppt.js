let alum= prompt("Ingrese el nombre del alumno ")
let nota=+prompt("Ingrese la nota del exámen parcial")
let notaF=+prompt("Ingrese la nota de su examen final")
let practicas=+prompt("Ingrese el promedio de prácticas")

promedioF=(nota+practicas+notaF+notaF)/4

if(promedioF >11)
{
    alert("El alumno " + alum +" esta aprobado y tiene " + promedioF + " de promedio final" );
} else{
    alert( "El alumno " + alum +" esta desaprobado y tiene " + promedioF + "  de promedio final")
}