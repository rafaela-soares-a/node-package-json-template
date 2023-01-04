import { countries } from "./countries.js"

// adicione um script que adicionaum país à lista de países

const name = process.argv [2]
const code = process.argv [3]

console.log (name)
console.log (code)

if (!name || !code) {
    console.log ("Faltou inserir o nome do pais e o seu código")
} else {
    const novoPais= (
        name,
        code
    )

    countries.push (novoPais)
    console.log (countries[countries.length -1])
}

// console.log (countries[countries.length -1 esse console é para ver o país que adicionamos a lista



