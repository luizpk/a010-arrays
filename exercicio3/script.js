
// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNum = [25,69,34,87,8,3,15]
const arrayString = ["batata","cebola","cenoura","alho"]
const arrayMix = [25,"arroz","batata",65,5>2,]



// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log(arrayNum)
arrayNum.push(100)
console.log(arrayNum)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

console.log(arrayString)
arrayString.pop()
console.log(arrayString)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log(arrayMix)
arrayMix.splice(1,1)
console.log(arrayMix)





