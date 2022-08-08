/*
Filtre e retorne todos os números pares de um array.
*/

const nums = [1, 2, 3, 5, 8, 10, 12];

function retornaPar(arr){
    return arr.filter(function (item){
        return item % 2 === 0;
    })
}

console.log(retornaPar(nums));

/* retornando os ímpares

const nums = [1, 2, 3, 5, 8, 10, 12];

function retornaImpar(arr){
    return arr.filter(function (item){
        return item % 2 !== 0;
    })
}

console.log(retornaImpar(nums));

*/