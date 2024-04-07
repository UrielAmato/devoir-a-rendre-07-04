
fetch('https://pokeapi.co/api/v2/pokemon/67')
.then((Response) => Response.json())
.then((data)=>{
    console.log(data)
})

displayPokemon(67)


function fetchPokemon(pokemonID) {
    if ( !fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonID)
    .then((Response) => Response.json()) ) {
        return 1
    }else{
        return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonID)
        .then((Response) => Response.json())
    }

    
}

async function displayPokemon(pokemonID) {

    const data = await fetchPokemon(pokemonID)
    console.log(document.getElementById("pokemon"))
    
    if (data==1){
        console.log("couldn't fetch document data")
    }else if (!document.getElementById("pokemon")){
        console.log("couldn't get pokemon elements (c'est littéralement un ctrl+c-v du cour)")
    }else{
        document.getElementById("pokemon").innerHTML = `
        <h1> ${data.species.name} </h1>
        <img src= ${data.sprites.front_default} alt= ${data.name} />
        `
    }
    
        
        

}