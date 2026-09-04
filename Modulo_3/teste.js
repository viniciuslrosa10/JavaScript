/*
Quero criar um novo array contendo apenas os nomes dos produtos que estão disponíveis.

const produtosDisponiveis[];
*/

const produtos = [
    {nome: "Produto 1", disponivel: true},
    {nome: "Produto 2", disponivel: false},
    {nome: "Produto 3", disponivel: true},
    {nome: "Produto 1", disponivel: true}
];

//for of
for (const produto of produtos) {
    if(produto.disponivel == true){
        console.log(produto);
    }
};

//map e filter
const prodDisponivel = produtos
    .filter((produto) => produto.disponivel === true)
    .map((produto) => produto.nome);

console.log(prodDisponivel);
