const atendimentos = [{
    id: 1,
    nome: "Lua",
    raca: "Shitzu",
    tutor: "Vinícius",
    numTutor: "1998967543",
    itens: [
        {servicoId: 101, quantidade: 1},
        {servicoId: 102, quantidade: 2},
        {servicoId: 103, quantidade: 1},
    ]
    
},

{
    id: 2,
    nome: "Scooby",
    raca: "Basset Alerquin",
    tutor: "Murilo",
    numTutor: "1999123456",
    itens: [
        {servicoId: 101, quantidade: 1},
        {servicoId: 102, quantidade: 2},
        {servicoId: 103, quantidade: 1},
    ]
    
},

{
    id: 3,
    nome: "Gaia",
    raca: "PittBull",
    tutor: "Olavo",
    numTutor: "1999935848",
    itens: [
        {servicoId: 101, quantidade: 1},
        {servicoId: 102, quantidade: 2},
        {servicoId: 103, quantidade: 1},
    ]
},
];

async function buscarAtendimento(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const atendimento = atendimentos.find(atendimento => atendimento.id === id)

            if (atendimento) {
                resolve(atendimento);
            }
            else {
                reject("Paciente não encontrado");
            }

        }, 1000);
    });
}

module.exports = {
    buscarAtendimento
};