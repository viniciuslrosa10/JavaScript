//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!

//----------------------------------------------------------------------

//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.

//----------------------------------------------------------------------

//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade

//----------------------------------------------------------------------

//Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/

//----------------------------------------------------------------------

console.log("Atividade 1")
function saudacao(nome){
    return nome;
}
const saudacao2 = saudacao("Vinícius");
console.log("Olá!, " + saudacao2);

console.log("Atividade 2")

function soma(numero1, numero2){
    const resultado = numero1 + numero2;
    console.log(resultado)
}
soma(10, 20);

function subtr(numero3, numero4){
    const resultado = numero3 - numero4;
    console.log(resultado)
}
subtr(20, 10);

function multi(numero5, numero6){
    const resultado = numero5 * numero6;
    console.log(resultado)
}
multi(10, 10);

function divi(numero7, numero8){
    const resultado = numero7 / numero8;
    console.log(resultado)
}
divi(20, 10);

console.log("Atividade 3")

function verificacao(idade){
if(idade >= 18){
        return ("Maior de idade");
    }

else{
    return ("Menor de idade")
}
}
console.log(verificacao(17))

console.log("Atividade 4")
const calcularDobro = (numero) => {
    return numero * 2;
}