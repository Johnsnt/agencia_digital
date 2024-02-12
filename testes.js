function criarArray (...p) {
    return Array.from(p)
}

const digimonArray = criarArray(' Bancho Mamemon', ' Commandramon', ' Captain Hookmon', ' Chaos Dukemon Core', ' Black Tailmon Uver')

console.log(`Array Digimon:${digimonArray}`)

digimonArray.push(' Jellymon')

console.log(`PUSH:${digimonArray}`)

digimonArray.splice(0, 1)

console.log(`SPLICE:${digimonArray}`)

digimonArray.pop()

console.log(`POP:${digimonArray}`)

digimonArray.shift()

console.log(`SHIFT:${digimonArray}`)

digimonArray.unshift(' Keramon(X-Antibody)')

console.log(`UNSHIFT:${digimonArray}`)

