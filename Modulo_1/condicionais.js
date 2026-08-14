//#region ante só true or false
const idade = 20;

if (idade >= 18) {
    console.log("Maior de idade")
}
//endregion

//#region elif

const anos = 16;

if (anos >= 18) {
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade");
}

//endregion

//#region exercício
const nota = 7; 

if (nota >= 7) {
    console.log("Aprovado");
}

else if (nota >= 5) {
    console.log("Recuperação");
}

else {
    console.log("Reprovado");
}

//endregion

//#region Condições Compostas
//-------login
const senha = 20;
const email = "dddddd@gmail.com"
const ativo = true;

if (senha === 18 && email === "dddddd@gmail.com" && ativo) {
    console.log("Usuário autorizado");
}
else{
    console.log("Usuário não autorizado!");
}
//endregion

// switch case
const dia = 6;

switch(dia){
    case 1:
        console.log("Domingo");
        break;

    case 2:
        console.log("Segunda-feira");
        break;
    
    case 3:
        console.log("Terça-feira");
        break;
    
    case 4:
        console.log("Quarta-feira");
        break;
    
    case 5:
        console.log("Quinta-feira");
        break;
    
    case 6:
        console.log("Sexta-feira");
        break;
    
    case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia inexistente")

}

/*Quando usar o switch case?
    - Quando temos muitas condições para verificar.
    - Quando temos uma variável que pode ter muitos valores diferentes.
    - Quando queremos deixar o código mais legível.

    Quando usar if/else?
        - Quando temos poucas condições para verificar.
*/


//operador ternario
//abstração do if/else

const idade = 20;
let mensagem;
//pode refazer com operador ternario
mensagem = idade >= 18 ? "Maior" : "Menor";
//constante = condição ? valor se true : valor se else

//laços

//while; for

//while - enquanto for verdade

let contador = 1;

while(contador <= 6 ){
    console.log(contador);

    contador++;
}

//#region for
//for(//iniciação; condição; incremento)

for (let i = 1; i <= 5; i++){
    console.log(i);
}

//for...of
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];

//otimizado para array
for(const fruta of frutas){
    console.log(fruta);
}

//tradicional
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}
//endregion