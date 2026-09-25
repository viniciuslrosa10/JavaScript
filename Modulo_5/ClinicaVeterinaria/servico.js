const servicos = [
    {id: 101, nome: "Consulta Veterinária", preco: 100},
    {id: 102, nome: "Vacina Antirrábica", preco: 80},
    {id: 103, nome: "Exame de Sangue", preco: 60}
];

async function buscarServicos(id) {
    return new Promise((resolve, reject) => {
    
            setTimeout(() => {
    
                const servico = servicos.find(servico => servico.id === id)
    
                if (servico) {
                    resolve(servico);
                }
                else {
                    reject("Serviço não encontrado");
                }
    
            }, 1000);
        });
    }

module.exports = {
    buscarServicos
}