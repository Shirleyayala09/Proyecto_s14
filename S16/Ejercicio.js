let x =+prompt("Ingrese el primer número" )
let y=+prompt("Ingrese el segundo número")

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

alert(`Al multiplicar: ${x} x ${y} nos da ${multipli(x,y)}.
Al alevar  ${x} a la ${y} nos da ${expon(x,y)}.
Al sumar  ${x} + ${y} nos da ${suma(x,y)}.
Al restar ${x} - ${y} nos da ${resta(x,y)}.`);

