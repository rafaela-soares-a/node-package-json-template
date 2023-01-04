import {countries} from "./countries.js"

// faça uma busca que encontre um país pela inicial do nome "Ex.: b, todos os paises que começam com a letra b"


const busca = process.argv [2]

if (!busca) {
consoile.log ("Faltou o argumento de busca")
}else {
    const resultado = countries.filter( contrie => contrie.name.toLowerCase()[0] === busca.toLowerCase())
    console.log (resultado)
}

// quando colocamos [0] ele procura a posição do elemento, por isso o 0 para que fosse buscada apenas a primeira letra.
// foi criado um script para essa pratica: "pratica2": "clear && node pratica2.js b",