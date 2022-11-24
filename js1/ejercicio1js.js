let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]


//1. Ordernar los pokemons por base_damage de menor a mayor.
//console.log(pokemons.sort( (a, b) => a.base_damage - b.base_damage));
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
 
function sortPokemons(argument){
    let validInput = ["type", "base_damage","base_hp","speed"]

    if(validInput.includes(argument)){
     let result=argument === "type"? (pokemon.sort((a,b) => a[argument] .localeCompare(b[argument]))) : (pokemons.short((a,b) => a[argument]))
    console.log(result)
    }else{
        console.log("Debes ingresar un argumento valido")
    }
}
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
function filtrarpokemon(argument) {
    let filtrapokemon = pokemons.filter((pokemons) => pokemons.type === argument);
    let result =
      filtrapokemon.length === 0
        ? "Tipo de pokemon no encontrado"
        : filtrapokemon;
    console.log(result);
  }
//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 let pkemonMater = {
    id: 1,
    name :"Jose",
    created_date : "23/11/2022 10:50",
    pokemon : []
 }
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function addRandomPokemon(){
    const aleatorio = Math.floor(Math.random()*pokemons.legenth)
    pokemonMaster.pokemon.push(pokemons[aleatorio])
}
 
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:

function addAtributes(){
    for(let i=0; i<pokemons.length; i++){
        pokemons[i]["min_dagame"]=Math.floor(Math.random() * (2-1+1)+1)
        pokemons[i]["max_dagame"]=Math.floor(Math.random() * (5-3+1)+3)
    }
    console.log(pokemons)
}
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function setDamage(index){
    if(index < pokemons.lengeth){
    addAtributes()
    let selectedPokemon =pokemons[index]
    let total_damage=selectedPokemon.base_damage +Math.floor(Math.random() * (selectedPokemon.max_dagame-1+selectedPokemon.min_dagame)+selectedPokemon.min_dagame)
    console.log(total_damage)
} else{
    console.log('Please enter a number not greater than' + pokemons.legength - 1)
}

}
 
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 
function ordenarMaestro() {
    agregarPokemon();
    agregarPokemon();
    console.log(MaestroPokemon.pokemon.sort( (a, b) => (b.base_damage + b.max_damage) - (a.base_damage + a.max_damage) ))
}


//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 
function setDamage(index){
    if (index < pokemons.length){
        addAtributes()
        let selectedPokemon = pokemons[index]
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random() * (selectedPokemon.max_damage-1+selectedPokemon.min_damage)+selectedPokemon.min_damage)
   
        console.log(total_damage)
    } else {
        console.log(`Please enter a number not greater than ${pokemons.length - 1}`)
    }
}


/*//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
const root = document.getElementById("root")
const ol = document.createElement('ol')
root.append(ol)
pokemons.forEach(pokemon => {
    const li = document.createElement('li')
    li.textContent = pokemon.name
    li.addEventListener("click", () => setDamage(1))
    ol.append(li)
})*/

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
 
const root = document.getElementById("root")
const table = document.createElement("table")
root.append(table)

const tr=document.createElement("tr")
table.append(tr)

//Headers

let headers = Object.keys(pokemon[0])

for(index in headers){
    const th=document.createElement("th")
    th.textContent = headers[index]
    tr.append(th)
}

//Table body
for(let i=0;i<pokemons.length;i++){
    const trb = document.createElement("tr")
    const values =Object.values(pokemons[i])

    for(let j=o;j<values.length;j++){
        const tdb= document.createElement("td")
        tdb.textContent= values[j]
        trb.append(tdb)
    }
    table.append(trb)
}

//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
 
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.

