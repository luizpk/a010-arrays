
//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

const arrayNumeros = [25,69,250,986,74]
const arrayString = ["lasanha", "banana","alcachofra","queijo"]
const arrayMisturado = [256,"banana",5>2, "cachorro", 4+5===9,682]

console.log(arrayNumeros.length)
console.log(arrayString.length)
console.log(arrayMisturado.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNumeros[0])
console.log(arrayString[1])
console.log(arrayMisturado[2])


//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(arrayNumeros.includes(986))
console.log(arrayMisturado.includes(986))