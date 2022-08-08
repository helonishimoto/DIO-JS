/*
1. Some todos os números de um array
*/

const prices = [200, 120.3, 80, 700];

const soma = prices.reduce((prevValue, currentValue) => prevValue + currentValue);

console.log(soma);