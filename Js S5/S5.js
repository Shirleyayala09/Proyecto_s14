//Creamos formulario
const $root =document.getElementById('root');

const $form = document.createElement('form');
$form.classList.add('bg-light')
$form.style.textAlign = "center"

//Label
const $labelnombre = document.createElement ('label');
$labelnombre.setAttribute('for','nombre');
$labelnombre.textContent = 'Nombre';
$form.append($labelnombre)

const $inputnombre = document.createElement ('input');
$inputnombre.setAttribute('type','text');
$inputnombre.setAttribute('name','nombre');
$inputnombre.setAttribute('id','nombre');
$form.append($inputnombre)

$labelnombre.classList.add('d-block')

//apellido
const $labelapellido = document.createElement ('label');
$labelapellido.setAttribute('for','apellido');
$labelapellido.textContent = 'Apellido';
$form.append($labelapellido)

const $inputapellido = document.createElement ('input');
$inputapellido.setAttribute('type','text');
$inputapellido.setAttribute('name','apellido');
$inputapellido.setAttribute('id','apellido');
$form.append($inputapellido)

$labelapellido.classList.add('d-block')

//cant.horas
const $labelhoras= document.createElement ('label');
$labelhoras.setAttribute('for','horas');
$labelhoras.textContent = 'Cantidad de horas';
$form.append($labelhoras)

const $inputhoras = document.createElement ('input');
$inputhoras.setAttribute('type','text');
$inputhoras.setAttribute('name','number');
$inputhoras.setAttribute('id','horas');
$form.append($inputhoras)
$labelhoras.classList.add('d-block')

//Categoria

const $labelcategoria = document.createElement ('label');
$labelcategoria.textContent = 'Elige tu categría';
$form.append($labelcategoria)
$labelcategoria.classList.add('d-block')

const $inputcategoria1 = document.createElement ('input');
const $textoradio1 =document.createElement('span');
$textoradio1.textContent ='A'
$inputcategoria1.setAttribute('type','radio');
$inputcategoria1.setAttribute('name','categoria');
$inputcategoria1.setAttribute('value','40');
$form.append($inputcategoria1)
$form.append($textoradio1)
$inputcategoria1.classList.add('me-1')
$textoradio1.classList.add('me-3')



const $inputcategoria2 = document.createElement ('input');
const $textoradio2 =document.createElement('span');
$textoradio2.textContent ='B'
$inputcategoria2.setAttribute('type','radio');
$inputcategoria2.setAttribute('name','categoria');
$inputcategoria2.setAttribute('value','35');
$form.append($inputcategoria2)
$form.append($textoradio2)
$inputcategoria2.classList.add('me-1')
$textoradio2.classList.add('me-3')

const $inputcategoria3 = document.createElement ('input');
const $textoradio3 =document.createElement('span');
$textoradio3.textContent ='C'
$inputcategoria3.setAttribute('type','radio');
$inputcategoria3.setAttribute('name','categoria');
$inputcategoria3.setAttribute('value','30');
$form.append($inputcategoria3)
$form.append($textoradio3)
$inputcategoria3.classList.add('me-1')
$textoradio3.classList.add('me-3')

//cantidad de años de servicio

const $labelanios = document.createElement ('label');
$labelanios.textContent = 'Elige años de servicio';
$form.append($labelanios)
$labelanios.classList.add('d-block')

const $radioanios1 = document.createElement ('input');
const $textanios1 =document.createElement('span');
$textanios1.textContent ='1-3 Años'
$radioanios1.setAttribute('type','radio');
$radioanios1.setAttribute('name','anios');
$radioanios1.setAttribute('value','0.15');
$form.append($radioanios1)
$form.append($textanios1)
$radioanios1.classList.add('me-1')
$textanios1.classList.add('me-3')

const $radioanios2 = document.createElement ('input');
const $textanios2 =document.createElement('span');
$textanios2.textContent ='4-7 Años'
$radioanios2.setAttribute('type','radio');
$radioanios2.setAttribute('name','anios');
$radioanios2.setAttribute('value','0.20');
$form.append($radioanios2)
$form.append($textanios2)
$radioanios2.classList.add('me-1')
$textanios2.classList.add('me-3')

const $radioanios3 = document.createElement ('input');
const $textanios3 =document.createElement('span');
$textanios3.textContent ='8-12 Años'
$radioanios3.setAttribute('type','radio');
$radioanios3.setAttribute('name','anios');
$radioanios3.setAttribute('value','0.30');
$form.append($radioanios3)
$form.append($textanios3)
$radioanios3.classList.add('me-1')
$textanios3.classList.add('me-3')

const $radioanios4 = document.createElement ('input')
const $textanios4 =document.createElement('span');
$textanios4.textContent ='13-más Años'
$radioanios4.setAttribute('type','radio');
$radioanios4.setAttribute('name','anios');
$radioanios4.setAttribute('value','0.35');
$form.append($radioanios4)
$form.append($textanios4)
$radioanios4.classList.add('me-1')
$textanios4.classList.add('me-3')

//
const $btnsubmit = document.createElement('button')
$btnsubmit.textContent = 'Enviar'

//$btnsubmit.setAttribute('type','submit')
$form.append($btnsubmit)
$btnsubmit.classList.add('d-block',"btn", "btn-danger", 'my-3')
$btnsubmit.style.marginLeft = "auto"
$btnsubmit.style.marginRight = "auto"

$root.append($form)


$btnsubmit.addEventListener('click',(e)=>{
    e.preventDefault()

let valorcategoria= 0
let valorbonificacion=0;
let canthrs=$inputhoras.value;
let bonificacion = 0;
let sueldobasico = 0;
let sueldoneto = 0 ;
let letracategoria = 'A'
let textanios = ''
let nombre= $inputnombre.value
let apellido= $inputapellido.value

if($inputcategoria1.checked){
    valorcategoria = $inputcategoria1.value;
    letracategoria='A'
}
if($inputcategoria2.checked){
    valorcategoria = $inputcategoria2.value;
    letracategoria='B'
}
if($inputcategoria3.checked){
    valorcategoria = $inputcategoria3.value;
    letracategoria='C'

}if($radioanios1.checked){
    valorbonificacion=$radioanios1.value;
    textanios='1-3'

}else if ($radioanios2.checked){
    valorbonificacion=$radioanios2.value;
    textanios='4-7'

}else if ($radioanios3.checked){
    valorbonificacion=$radioanios3.value
    letracategoria='8-12'

}else{
    valorbonificacion=$radioanios4.value;
    letracategoria='13- más años'
}

    sueldobasico = canthrs*valorcategoria;

    bonificacion =sueldobasico * 0.15;
    
    sueldoneto= (sueldobasico + bonificacion) *0.80;

    let mensaje = `
    <p>El trabajador ${nombre} ${apellido} de Categoria ${letracategoria} y con ${textanios} de servicio recibirá:</p>
    <p> Sueldo Básico: S/ ${sueldobasico}</p>
    <p> Bonificación por Años de servicio: S/ ${bonificacion}</p>
    <p> Sueldo Neto: S/ ${sueldoneto} (80% del sueldo bruto total.)
    `
    const div= document.createElement('div')
    div.innerHTML = mensaje
    $root.append(div);

}) 

