temperatura = 380;
freioPressionado = true;

const alertaDePerigo = freioPressionado >= 400;
console.log(alertaDePerigo);

const usoIntenso = temperatura > 300 && freioPressionado;
console.log(usoIntenso);

const freioSeguro = temperatura < 400 && temperatura >= 50;
console.log(freioSeguro);

const alertaNoPainel = temperatura > 400 || temperatura < 0;
console.log(alertaNoPainel);

const estadoInativo = console.log(!(freioPressionado = true));
