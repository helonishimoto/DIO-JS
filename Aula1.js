/*
 Atividade: 
 - Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo: 

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
 */
 

function comparaNumeros(num1, num2) {
    const fraseUm = criaFraseUm(num1, num2);
    const fraseDois = criaFraseDois(num1, num2);

    return `${fraseUm} ${fraseDois}`;
}

function criaFraseUm(num1, num2) {
    let fraseUm = `Os números ${num1} e ${num2}`;
    let iguais = 'não';

    if (num1 === num2) {
        iguais = '';
    }

    return `${fraseUm} ${iguais} são iguais.`;
}

function criaFraseDois(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }

    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));