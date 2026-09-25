const { buscarAtendimento } = require("./atendimento");
const { buscarServicos } = require("./servico");

async function fecharConta(atendimentoId) {
    try {
        
        console.log("Buscando Atendimento...")
        const atendimento = await buscarAtendimento(atendimentoId);
        console.log(atendimento);

        
        let totalGeral = 0;
        console.log("--------------------------")
        console.log("Comanda")
        for (const itens of atendimento.itens) {
            const servico = await buscarServicos(itens.servicoId);
            const subTotal = servico.preco * itens.quantidade;

            totalGeral += subTotal;

            console.log(`${servico.preco} x ${itens.quantidade} = R$ ${subTotal}`);
}

console.log("-------------------------------");
console.log("Valor Final: ", totalGeral);
        
}
    catch (erro) {
    console.log("Não encontrado", erro);
};
};

fecharConta(2);
