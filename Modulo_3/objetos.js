//#region 1
//Construindo 1 objeto
const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    RM: 87654,
    cadastroAtivo: true,
    email:null,
    hobby: ["Ler", "Bola", "Xadrez"],
    endereco: {
        rua: "Rua 35, 405",
        bairro: "Jardim Italia",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: 13000560
}
};
//console.log(aluno);

//Acessando propriedades dos objetos

/*console.log(aluno.nome);

//regra se cadasroAtivo = true, msg = seja bem-vindo ao nosso sistema
if(aluno.cadastroAtivo === true){
    console.log("Seja bem-vindo ao nosso sistema");
}
else{
    console.log("O seu cadastro não está ativo, procure o RH");
}

console.log(aluno.endereco.rua);*/

//Alterar propriedades do objeto

aluno.idade = 18;

console.log(aluno.idade);

aluno.cadastroAtivo = false
aluno.endereco.bairro = "Cinelândia"
console.log(aluno.cadastroAtivo);
console.log(aluno.endereco.bairro);


//Adicionando propriedades

aluno.cpf = 98765987643
aluno.telefone = "(19) 93432-2345"
console.log(aluno);

//deletar uma propriedade
delete aluno.curso;
console.log(aluno)
//#endregion

//#region Atividade 1

const filme = {
    titulo: "Interstelar",
    ano: 2026,
    genero: "Ficção Científica",

    apresentar: function(){
        console.log(`O melhor ${this.titulo}`);
    }
};

filme.apresentar();

/*console.log(filme.titulo);
filme.ano = 2014;
filme.diretor = "Christopher Nolan";
delete filme.genero;
console.log(filme)*/

//destructuring

const { nome, idade, RM} = aluno;

console.log(nome);

//Renomeando com destruturing

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto)

//spread operator ... algo como espalhar

const dadosFamilia = {
    nomeMae: "Graziele",
    nomePai: "Sidnei",
};

const usuario = {
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26"
};

console.log(usuario);

//#region Object.keys, Object.values, Object.entries
//chaves do objeto

console.log(Object.keys(aluno));
console.log("---------------------------------------");
console.log(Object.values(aluno));
console.log("---------------------------------------");
console.log(Object.entries(aluno));

//objeto x JSON

//Objeto passando para JSON
const json = JSON.stringify(aluno);
console.log(json);

//json passando para objeto
const objeto = JSON.parse(json);
console.log(objeto)
//#endregion