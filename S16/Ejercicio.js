let Num1 =+prompt("Ingrese el primer número" )
let Num2=+prompt("Ingrese el segundo número")

function multipli(a,b){
return a*b
};
 
function expon(a,b){
return Math.pow(a,b)
    };

function suma(a,b){
return a +b
};
function resta(a,b){
return a-b
};

alert(`Al multiplicar: ${Num1} x ${Num2} nos da ${multipli(Num1,Num2)}.
Al alevar  ${Num1} a la ${Num2} nos da ${expon(Num1,Num2)}.
Al sumar  ${Num1} + ${Num2} nos da ${suma(Num1,Num2)}.
Al restar ${Num1} - ${Num2} nos da ${resta(Num1,Num2)}.`);

