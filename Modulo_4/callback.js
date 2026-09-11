//#region 1
//callback

/**
 * Se vc pedir uma operação que demora muito o node não precisa esperar parado
 */

//Callback é uma função passada para outra função para ser executada posteriormente

numeros = [1, 2, 3, 4, 5, 6, 7, 90];

numeros.forEach((n) => { 
    console.log(n);
});

//Isso é callback
/*(n) => { 
    console.log(n);
*/
//#endregion

//#region 2
function processarUsuario(nome, callback) {
    console.log("Processando " + nome);
    callback();
}

processarUsuario("Vinicius", () => {
    console.log("Usuário processado");
});

//========================================

function buscarUsuario(callback) {
    //simulação de tempo
    setTimeout(() => {
        //construindo objetos
        const usuario = {
            id: 1,
            nome: "Vinicius"
        };
        callback(usuario);
    }, 2000)
};

console.log("Início da chamada");

buscarUsuario((usuario) => {
    console.log(usuario);
});

console.log("Fim do processo");

//Problema do callback
buscarUsuario => buscarPedido => buscarProduto => CalcularTotal
//#endregion