import { countries } from "./countries.js"

// console.log(countries)

const busca = process.argv [2]
// console.log (busca)

if (!busca) {
    console.log ("Faltou inserir um argumento")
} else {
    const resultado = countries.filter((countrie) => {
        return countrie.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    })
    if (resultado.length === 0) {
        console.log ("pais não encontrado")
     } else {
        console.log(resultado)
     }
}
