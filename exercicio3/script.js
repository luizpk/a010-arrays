//Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const exercicio3Array = ['alface','diamante','Carlos',256,'couve',89]
const exercicio3ArrayOriginal = ['alface','diamante','Carlos',256,'couve',89]
const exercicio3ArrayCopia = ['alface','diamante','Carlos',256,'couve',89]




//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
exercicio3Array.push(96)
console.log(exercicio3Array)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
exercicio3ArrayOriginal.pop()
console.log(exercicio3ArrayOriginal)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
exercicio3ArrayCopia.splice(1,1)
console.log(exercicio3ArrayCopia)





