//#region atividades 

// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".
const idade = 16;

if (idade >= 18) {
    console.log("Maior de idade");
}

else{
    console.log("Menor de idade");
}

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.

const nota = 7; 

switch(nota){
    case (nota < 5):
        console.log("Reprovado");
        break;

    case (nota >= 5 && nota < 7):
        console.log("Recuperação")

    case (nota >= 7):
        console.log("Aprovado");
        break;
}
    
//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

const usuário = "Vinícius";
const senha = 1234;

if (senha === 1234 && usuário === "Vinícius") {
    console.log("Usuário autorizado");
}
else{
    console.log("Usuário não autorizado!");
}

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

const statusPedido = "Enviado"

switch(statusPedido){
    case "Pendente":
        console.log("Esperando pedido ser pago");
            break;

    case "Pago":
        console.log("Pagamento aprovado");
        break;

    case "Enviado":
        console.log("O pedido foi enviado ");
        break;

    case "Processando":
        console.log("O pedido está sendo feito");
        break;

    case "Entregue":
        console.log("Seu pedido foi entregue");
        break;

    case "Concluído":
        console.log("Seu pedido está pronto");
        break;

    default:
        console.log("Status de pedido desconhecido");
}

//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.
console.log("Atividade 5")
for(let i=0; i <= 100; i++){

    if(i % 2 === 0){
    console.log(i);
}
}

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
console.log("Atividade 6")

let i = 1;

while(i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++
}

console.log("\n")

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(const numero of numeros){
    if (numero % 2 === 0){
    console.log(numero);
    
    }
}

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
console.log("Atividade 7")

const nomes = ["Vini", "Murilin", "Luisin", "Pitanga", "Vithin", "Dias", "Kako", "Miguelito", "Terassi", "Olavo"];

for(const nome of nomes){
    console.log(nome);
}

//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length.
console.log("Atividade 8")
const nomes1 = ["Vini", "Murilin", "Luisin", "Pitanga", "Vithin", "Dias", "Kako", "Miguelito", "Terassi", "Olavo"];
for(const nome of nomes1){
    if(nome.length > 5){
        console.log(nome);
    }
}
//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/

console.log("Atividade 9")
const numeros1 = [10, 20, 30, 40, 50]
let somando = 0 
for(const numero of numeros1){
somando += numero;
}

console.log(somando);


//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/

console.log("Atividade 10")

const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

//dado o array acima, mostre somente o pedidos pagos

for(let i = 0; i < pedidos.length; i++){
    
    //verificar se pedido é "pago" é true
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}

//com for...of
for(let pedido of pedidos) {
    if(pedido.pago === true){
        console.log(pedidos);
    }
}
//#endregion