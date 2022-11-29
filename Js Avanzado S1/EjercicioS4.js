
//10. Crear una funcion que te permita ingresar en un prompt la informacion de un usuario de la siguiente manera:
// "Ingrese la informacion del usuario (nombre, apellido, edad, profesion)"
// El usuario digitara: Andres, Perez, 28, ingeniero.
// La informacion debe ser guardada como objeto dentro del array users asignadole un id unico a cada registro.

usuarios= []
let $id = 0
function registrar(idmod = null) {
    let info = prompt('Ingrese la siguiente información: (nombre, apellido, edad, profesion)')
    let obj = {Id:$id,  Nombre: '', Apellido: '', Edad: 0, Profesión: ''}
    let infoArr = info.split(' ');

    let pos = 0;
    //zona modificable
    if (idmod !== null) {

        for (const index in usuarios) {
     
            if(usuarios[index].id == idmod){
                console.log('Hemos encontrado al usuario a modificar:')
                console.log(usuarios[index]);
                for (const propiedad in obj) {


                    if( usuarios[index][propiedad] == idmod) {
                        console.log('son iguales');
                    }else {
                        usuarios[index][propiedad] = infoArr[pos]
                        pos++;
                    }
                }

                let fecha = new Date();
                usuarios[index].fecha_modificada = fecha.toLocaleString()
                return index
                
            }
        } 

    } else {
        for (const index in obj) {
            if(index === 'id'){
                // console.log('index === id');
                obj[index] = $id
                continue;
            } 
            obj[index] = infoArr[pos]
            pos++;
        }
        $id++;
        // DATE 
        let fecha = new Date();
        obj.created_date = fecha.toLocaleString()
        usuarios.push(obj)
        return obj
    }
}
//11. Utilizando el objeto Date, añadir la propiedad created_date de manera interna en donde se registre el
// momento en que ese registro fue creado.


 
//12.
 
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]
 
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)

// function ordenar(reverse) {
//     if( reverse === true ) {
//         users.sort( (a, b) => {
//             if( a['created_at'] < b['created_at']) {
//                 return 1
//             }else if (a['created_at'] > b['created_at']){
//                 return -1
//             } else {
//                 return 0
//             }
//         })
//         reverse = false;
//     } else {
//         users.sort( (a, b) => {
//             if( a['created_at'] > b['created_at']) {
//                 return 1
//             }else if (a['created_at'] < b['created_at']){
//                 return -1
//             } else {
//                 return 0
//             }
//         })
//         reverse = true
//     }
// }

// ordenar( false )
//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.
// let fecha = new Date('2022-09-26T06:25:21.118Z');

function filtrar( mes, anio) {
    let filtrados = users.filter(( obj ) => {
      let fecha = new Date(obj.created_at);
      let mont = fecha.getMonth() + 1 ;
      let year = fecha.getFullYear();

      console.log(`${mont} : ${mes} || ${year} : ${anio}`)

      return (mes === mont && anio === year)
    })
    return filtrados

}

console.log(filtrar(5, 2022))
//14. Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:
// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10.
 
// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.
const $root = document.getElementById('root');
const $btn = document.createElement('button');


$btn.textContent ='Crear usuario';

$root.append($btn)

const $tabla =document.createElement('table')
//$tabla.setAttribute('border', 'collapse')
$tabla.classList.add("table", "table-bordered","table-dark","table-striped")
const $thead = document.createElement('thead')
const $tbody =document.createElement ('tbody')
const $trh = document.createElement('tr')
let inversa = false

$root.append($tabla)
// funcion pintarHTML
function pintarhtml( array, nrodeobjeto = null ) {
    $tbody.innerHTML =''
    $thead.innerHTML=''
    $tabla.innerHTML=''
    $trh.innerHTML=''
    if(nrodeobjeto === null ){
        console.log("estoy nulo")
        let prop=0
        let objbase={}
        for ( const value of array){
            if( Object.keys(value).length > prop ){
                prop=Object.keys(value).length
                objbase=value
            }
        
        }
    //cabeceras
        for (const key in objbase) {
            const $th = document.createElement('th');
            $th.textContent = key;
              // Zona ordanamiento
              $th.addEventListener('click', () => {
                $tbody.innerHTML = ''
                if(inversa === true) {
                    ordenar(inversa, $th.textContent);
                    inversa = false
                } else {
                    ordenar(inversa, $th.textContent);
                    inversa = true
                }
                pintarhtml(array)
                console.log(array)
            })
            // fin de ordenamiento
            $trh.append()
            $trh.append($th)
        }
        $thead.append($trh)
        $tabla.append($thead) 
    }
    
    //cabeceras 3
    for (const key in array[nrodeobjeto]) {
        const $th = document.createElement('th');
        $th.textContent = key;
        // zona ordenamiento
        $th.addEventListener('click', () => {
            $tbody.innerHTML = ''
            if(inversa === true) {
                ordenar(inversa, $th.textContent);
                inversa = false
            }else {
                ordenar(inversa, $th.textContent);
                inversa = true
            }   
            pintarhtml(array)
            console.log(array)
        })
        // fin de ordenamiento
        $trh.append($th)
    }
    $thead.append($trh)
    $tabla.append($thead)
    
    // tbody
    for ( posicion in array) {
        const $tr = document.createElement('tr')

        for (let i = 0; i < Object.keys(array[posicion]).length; i++) {

            let prop = Object.keys(array[posicion])[i];
            const $td = document.createElement('td')
            $td.textContent = array[posicion][prop];
        
            $tr.append($td)
        }

        $tbody.append($tr)
    }
    $tabla.append($tbody)
    
}


//

$btn.classList.add('btn','btn-primary','my-3')
$btn.addEventListener('click', ()=>{
        registrar()
     pintarhtml(usuarios)
})


// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe 
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
const $btnupdate = document.createElement('button');
$btnupdate.classList.add("btn", "btn-warning", 'me-4')
$btnupdate.textContent ='Modificar usuario';

$root.append($btnupdate)

$btnupdate.addEventListener('click', () => {
    if(usuarios.length > 0) {
        let nrodeobjeto = 0; 
        let idmodificar = prompt('Ingrese el id del registro que desea modificar');
        if(idmodificar === '' || idmodificar === null) {
            console.log('ingresa tu usuario');
        }

        for ( obj of usuarios){
            // console.log(obj.id);
            if(obj.id == idmodificar){
                nrodeobjeto= registrar(idmodificar)
                console.log('entre al bucle');
                alert(`El id ${idmodificar} si existe, modificalo`);
                break;
            }
        }
        pintarhtml(usuarios, nrodeobjeto);
    } else {
        alert('No hay usuarios que modificar')
    }

})
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
 
const $btndelete = document.createElement('button');
$btndelete.classList.add("btn", "btn-danger")
$btndelete.textContent ='Borrar registro';

$root.append($btndelete);

$btndelete.addEventListener("click", ()=> {
    if(usuarios.length > 0) {
        let idborrar =prompt("Ingrese el id del registro que desea borrar");

        for ( index in usuarios){
            
            if(usuarios[index].id == idborrar){
                console.log('entre al bucle');
                let respuesta = prompt(`El id ${idborrar} si existe. ¿Estas seguro?,colocar si/no`);
                if(respuesta === "si"|| respuesta === "SI"){
                usuarios.splice(index, 1 );
                pintarhtml(usuarios)
                }
                break;    
            }
        }
    }
})
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.
function ordenar(reverse, propiedad = 'created_at') {
    if( reverse === true ){
        if(isNaN(propiedad)){
            usuarios.sort((a, b) => a[propiedad].localeCompare(b[propiedad]))
        }else {
            usuarios.sort((a,b) => a[propiedad] - b[propiedad])
        }
        reverse = false
    }else {
            if(isNaN(propiedad)){
                usuarios.sort( (a, b) => b[propiedad].localeCompare(a[propiedad]))
            }else {
                usuarios.sort( (b, a) => b[propiedad] -a[propiedad])
            }
            reverse = true
    }}
// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.




