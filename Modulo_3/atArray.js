//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];

//Adicionando morango
frutas[6] = "Morango";
console.log(frutas);

//Adicionando abacaxi
frutas[0] = "Abacaxi";
console.log(frutas);

//Remova o ultimo elemento
frutas[6].pop
console.log(frutas);

//Remova o primeiro elemento
frutas.shift();
console.log(frutas);

//Mostre a quantidade de frutas
console.log(frutas.length);

/*
    Adicione "Morango" no final.
    Adicione "Abacaxi" no início.
    Remova o último elemento.
    Remova o primeiro elemento.
    Mostre a quantidade de frutas.
*/

//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
nomes.forEach(nome => {
    console.log("Olá, " + nome + "!");
});
//#endregion

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const novosPrecos = precos.map((preco) => {
    return preco + preco * 0.10;
})
console.log(novosPrecos);

//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.

const numerosMaioresQue20 = numeros.filter(numero => numero > 20);
console.log(numerosMaioresQue20)
//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.

const numeroMaiorQue20 = numeros.find ((n) => n > 20);
console.log(numeroMaiorQue20)
//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 

const existeMaiorDeIdade = numeros.some(n => n > 18);
console.log(existeMaiorDeIdade);

//every

//Usando o array acima codifique respondendo: Todos são maiores de idade?

const existeMaior18 = numeros.every(n => n > 18);
console.log(existeMaior18);

//#endregion

//#region reduce

const valores = [100, 200, 50, 150];

//Calcule o valor total.

const valorTotal = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(valorTotal);

//#endregion