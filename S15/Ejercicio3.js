let Num = +prompt('Ingresa un número');
let r=1;
for(let i=Num; i>0;i--){
    r *=i;
}

alert( "El factorial de " +Num + " es: " + r);
