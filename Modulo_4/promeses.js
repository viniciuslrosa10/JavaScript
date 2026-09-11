//Promeses - é uma promessa de que teremos um resultado no futuro

/*Formator
((parametros ...) => {lógica});
*/

//Criando uma promise

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso) {
        resolve("Tudo certo!!")
    }
    else {
        reject("Deu errado!!")
    }
});

//consumir a promisse

promessa.then((resolve) => {
    console.log(resultado);
})
    .catch((erro) => {
        console.log(erro);
    });