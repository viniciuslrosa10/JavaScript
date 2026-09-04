
   /* estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
        //[id, nome, quantidade, localização],
]
*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================


const estoque = [{

        id: 1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 01",
},
{
    id: 2,
    nome: "Pedal",
    quantidade: 5,
    localizacao: "Prateleira 02",
},
{
    id: 3,
    nome: "Câmbio",
    quantidade: 50,
    localizacao: "Prateleira 03",
},
{
    id: 4,
    nome: "Calota",
    quantidade: 100,
    localizacao: "Prateleira 02"
},
]


// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS 
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {
    const novoProduto = {
        id: estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    };

    estoque.push(novoProduto);

    console.log("Cadastro de produto realizado com sucesso! 📦");
}

// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() {  
    for(const produto of estoque){
        console.log(
            `ID: ${ produto.id }` +
            `\n Nome: ${ produto.nome }` +
            `\n Quantidade: ${ produto.quantidade }` +
            `\n Localização: ${ produto.localizacao }`
        );
};  
};


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(idBuscado) {
    for(const produto of estoque){
        if(produto.id === idBuscado){
            console.log("Produto encontrado!");

            console.log(
            `ID: ${ produto.id }` +
            `\n Nome: ${ produto.nome }` +
            `\n Quantidade: ${ produto.quantidade }` +
            `\n Localização: ${ produto.localizacao }`
        );
        return produto;
        };
    }; 
    console.log("Não encontramos o produto!")
};


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(idBuscado, novaQuantidade) {
    for(produto of estoque){
        if(produto.id === idBuscado){
            produto.quantidade = novaQuantidade;
            console.log("Quantidade Atualizada com sucesso!");
            return;
        };
    };
    console.log("Produto não encontrado!");
};


// ==========================================
// DELETAR PRODUTO
// ==========================================

function deletarProduto(){
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("------------------ Cadastrando Produto ------------------");
cadastrarProduto("Motor", 13, "Prateleira 2");
console.log("----------------- Listando Produto -------------------");
listarEstoque();
console.log("----------------- Buscando Produto -------------------");
buscarProduto(3);
console.log("----------------- Atualizando quantidade do Produto -------------------");
atualizarQuantidade(3, 20);