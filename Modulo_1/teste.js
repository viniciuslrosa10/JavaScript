//#region Exercício 3 - Sistema de acesso - Desafio
const dataNascimento = new Date("2000-02-29");
const ativo = true;

const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcessar);


