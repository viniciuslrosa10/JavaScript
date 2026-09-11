const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if(sucesso === true){
        resolve("Tudo certo!!")
    }
    else{
        reject("Deu errado!!")
    }
});

//consumir a promisse

promessa.then(() => {
    
});