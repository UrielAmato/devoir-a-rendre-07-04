/*displayCharacter("harry-potter","harry_potter")
displayCharacter("hermione-granger","hermione_granger")*/

let cards = document.getElementsByClassName("card"), cptCartes = 0

console.log(cards)
displayCharacter("harry-potter",cptCartes++)
console.log(cptCartes)
displayCharacter("hermione-granger",cptCartes++)
displayCharacter("ron-weasley",cptCartes++)
displayCharacter("albus-dumbledore",cptCartes++)

/*function fetchCharacter (charSlug) {
    return fetch('https://hp-api.lainocs.fr/characters/' + charSlug)
    .then((Response) => Response.json())
}

async function displayCharacter(charSlug,divID) {
    const data = await fetchCharacter(charSlug)
    console.log(data)
    console.log(data.name)
    
    document.getElementById(divID).innerHTML = `
        <h1> ${data.name} </h1>
        <img src= ${data.image} alt= ${data.name} />
        <h3> ${data.role} </h3>
        `

}*/

function fetchCharacter (charSlug) {
    return fetch('https://hp-api.lainocs.fr/characters/' + charSlug)
    .then((Response) => Response.json())
}

async function displayCharacter(charSlug,tabId) {
    const data = await fetchCharacter(charSlug)
    console.log(data)
    console.log(data.name)
    cards[tabId].innerHTML = `
    <h1> ${data.name} </h1>
    <img src= ${data.image} class="image" />
    <h3> Role: ${data.role} </h3>
    <h3> Blood: ${data.blood} </h3>
    <h3> Patronus: ${data.patronus} </h3>
    `
}
