//Simulação

//Função Auxiliar
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
));

//Função BuscarUsuario
async function buscarUsuario(id){
    await esperar(2000);

    return{
        id: 1,
        nome: "Vinícius Rosa",
        email: "vinicius@gmail.com"
    }
}
//Função BuscarPedidos
async function buscarPedido(usuarioId) {
    await esperar(3000);

    const todosPedidos = [
        {id: 1, produto: "X-Tudo"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "X-Bacon"}
        ];

        return todosPedidos.filter(pedido => pedido.id === usuarioId);
    }

//Função executar
async function executar() {
    try{
        console.log("Iniciando simulação")
        console.log("Buscando Usuário...")
        const usuario = await buscarUsuario(1);
        console.log("Usuário encontrado: ", usuario);

        //Buscar pedidos
        console.log("\nBuscando Pedidos pelo ID... ", usuario.id);
        const pedido = await buscarPedido(usuario.id);
        console.log("Pedido encontrado: ", pedido);
    }

    catch(erro){
        console.log("Deu errado");
    }
}

executar();