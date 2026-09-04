//#region 1
const numeros = [1, 2, 3, 4, 5, 6];

//map - cria um novo array com os elementos modificados

const numerosDobrados = numeros.map((numero) => {
    return numero * 2;
});
console.log(numerosDobrados);

//filter - cria um novo array com os elementos que atendem a uma condição
const maioresQue3 = numeros.filter((numero) => {
    return numero > 3;
});
console.log(maioresQue3);

/*
 |Método    |  Pergunta                             |
 |----------|                                       |
 |'forEach' |   O que quero fazer com cada elemento?|
 |     'map'|  Como quero transformar cada elemento?| 
 |  'filter'|  Quais elementos quero manter?        |
 */
//#endregion

//#region 2
//find - procura um elemento que satisfaça uma condição
const numerof = numeros.find((n) => n > 4);
console.log(numerof);

/*
filter x find
    filter
    -> retorna vários elementos

    find
    -> retorna o primeiro elemento
*/
//#endregion

//#region 3
//Não é tanto usado no dia a dia, mas é bom saber que existe.
//some - verifica se pelo menos um elemento atende a uma condição
const existeMaiorQue5 = numeros.some(n => n > 5);
console.log(existeMaiorQue5)
//#endregion

//#region 4
//every - verifica se todos os elementos atendem a uma condição
//retorna true ou false (boolean)
const todosMaioresQue0 = numeros.every(n => n > 0);
console.log(todosMaioresQue0);
//#endregion

//#region 5
//reduce - reduz o array a um único valor, aplicando uma função a cada elemento

const soma = numeros.reduce((total, numero) => {
        return total + numero;
}, 0);
console.log(soma);
//#endregion

