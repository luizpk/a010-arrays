// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const arrayNum = [25,69,34,87,8,3,15]
const arrayString = ["batata","cebola","cenoura","alho"]
const arrayMix = [25,"arroz","batata",65,5>2,]

console.log(arrayNum.length)
console.log(arrayString.length)
console.log(arrayMix.length)


// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNum[0])
console.log(arrayString[1])
console.log(arrayMix[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

const verifica1 = arrayNum.includes(87)
const verifica2 = arrayString.includes("feijão")

console.log(`Existe o número 87 no primeiro Array1? ${verifica1}`)
console.log(`Existe a palavra \"feijão\" no segundo Array? ${verifica2}`)