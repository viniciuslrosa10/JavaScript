//#region Start Operações
console.log("Start Operações")
const idade = 20;

console.log(idade >= 18);
//#endregion

//#region Operadores de comparação
console.log("\nOperações de comparação")
const a = 12
const b = 3
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //Comparação de valor
console.log(a === b); //Comparação de valor e tipo
console.log(a !== b);
//#endregion

//#region Exercício
const idade1 = 20;
const idade2 = 25;
console.log("\nExercício")
console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2); 
console.log(idade1 !== idade2);
//#endregion

//#region Operadores lógicos
console.log("\nOperadores Lógicos")
const idade3 = 20;
const idade4 = 25;

//Operador lógico AND
console.log(idade3 > 18 && idade4 > 18); //todas precisam ser verdadeiro

//Operador lógico OR
console.log(idade3 > 18 || idade4 > 18); //Uma precisa ser verdadeiro

//Operador lógico NOT
console.log(!(idade3 > 18)); //Inverte o valor da expressão
//#endregion

//#region Operadores de incremento e decremento
console.log("\nOperadores de incremento e decremento")
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero) //10
//#endregion

//#region Exercício 1 - Comparação
console.log("\nExercício 1 - Comparação")
const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); 
console.log(x === y); 
console.log(x !== y);
//#endregion

//#region Exercício 2 - == vs ===
console.log("Exercício 2 - Comparação")

console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
//#endregion

