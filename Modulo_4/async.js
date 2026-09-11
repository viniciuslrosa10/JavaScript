//#region No promisses temos

buscarUsuario().then(usuario => {
    console.log(usuario);
});
//#endregion
//async await - Essa função vai funcionar de forma assincrona e vai ter um pedaço que vamos precisar esperar

//#region No Async - await
async function buscarUsuarioAsync() {

    try{
        //Aqui é que eu quero que aconteça
        const usuario = await buscarUsuario();
        console.log(usuario);

    }
    catch(erro){
        //erro que rolou
        console.log(erro);
    }
}
//#endregion
