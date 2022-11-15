let cantA,cantB,cantC;

cantA=+prompt( 'Cantidad de entradas generales :  ');
cantB=+prompt( 'Cantidad de entradas mayores de 65 años :  ');
cantC=+prompt( 'Cantidad de entradas menores de edad :  ');
   
let Generales=cantA*150;
let mayores=cantB*50
let menores=cantC*80

alert( `Monto total Entradas generales: ${Generales};
Monto total de Entradas mayores de 65 años: ${mayores};
Monto total entradas menores de edad: ${menores} soles.`);
