//Cadastro de usuário

function cadastroUsuario(id, nome, senha, cpf, email){
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastroUsuario(1, "Vinícius", "1234", 98765432198, "x@gmail.com");
//console.log(usuario);

//Com o objeto eu agora consigo melhorar a que é exibido

console.log("Oi! " + usuario.nome + " seu cadastro foi realizado com sucesso!");

