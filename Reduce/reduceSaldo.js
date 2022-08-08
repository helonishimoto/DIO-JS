/*
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

list = [
    {
        name: 'supermercado',
        price: 200,
    },

    {
        name: 'combustível',
        price: 500,
    },

    {
        name: 'academia',
        price: 150,
    },
];

const saldo = 2000;

function somaFatura(saldo, list){
    
    return list.reduce(function (prevValue, currentValue, index) {
        return prevValue - currentValue.price;
    }, saldo);

}

console.log('Seu novo saldo é:', somaFatura(saldo, list));