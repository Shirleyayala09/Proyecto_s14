let importe= +prompt("Ingrese el precio de la compra")
let desct=importe/100 * 12
let PF=importe - desct

if(importe>=150){
    alert("Tiene un descuento del 12%, por lo tanto tiene un descuento otorgagado de : S/."+ desct+" y el Precio Final es de S/. " + PF )
}
else{
    alert("Su importe es de : S/." + importe)
}