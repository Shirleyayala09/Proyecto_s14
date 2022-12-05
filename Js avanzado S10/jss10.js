class Alumno{
    promediofinal=0
    constructor(codigo,nombre,nota1,nota2,nota3,nota4){
    this.codigo=codigo;
    this.nombre=nombre;
    this.nota1=nota1;
    this.nota2=nota2;
    this.nota3=nota3;
    this.nota4=nota4;
}
promedio(){
    
    return this.promediofinal = ((this.nota1 *0.15) + (this.nota2 *0.20) + (this.nota3 *0.25) + (this.nota4 *0.40)).toFixed(2)
}
condicion(notafinal){
    if(notafinal >= 12){
        return "APROBADO"
    }else{
        return "DESAPROBADO"
    }

}
obsequio(notafinal){
    if ( notafinal >=17){
    return "TE GANASTE UNA MOCHILA"
}else{
    return "SIGUE INENTANDO PARA LA PROXIMA"
}

}

}
const shir= new Alumno('01','shir',20,18,20,20)
const vacomi= new Alumno('02','Vacomi',20 ,20,20 )
const Oefer= new Alumno('03','Oefer',13 ,13,13,13 )
const Harry =  new Alumno('04','Harry',12 ,10,07,10 )

console.log(shir.promedio());
console.log(shir.promediofinal);
console.log(shir.condicion(shir.promediofinal));
console.log(shir.obsequio(shir.promediofinal));

// console.log(Oefer.promedio());
// console.log(Oefer.promediofinal);
// console.log(Oefer.condicion(Oefer.promediofinal));
// console.log(Oefer.obsequio(Oefer.promediofinal));

// console.log(Harry.promedio());
// console.log(Harry.promediofinal);
// console.log(Harry.condicion(Harry.promediofinal));
// console.log(Harry.obsequio(Harry.promediofinal));