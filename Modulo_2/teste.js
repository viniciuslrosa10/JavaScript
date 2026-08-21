//function tradicional
function somarTrad(numero1, numero2){
    return numero1 + numero2;
}

//Arrow function
const somar = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log("Tradicional", somarTrad(8, 3));
console.log("Arrow function", somar(8, 3));