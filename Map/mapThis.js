/**
 Pratique a sintaxe de multiplicação de números, uma vez utilizando o
 parâmetro this de um objeto criado por você, e depois sem ele.
 */
 // COM THIS


 const multDois = {
    value: 2,
 }

 const multSeis = {
    value: 6,
 }

 function mapThis(array, thisArg){
    return array.map(function (item){
        return item * this.value;
    }, thisArg)
 }

 const arr = [2, 4, 6];

 console.log('this -> multDois', mapThis(arr, multDois));

console.log('this -> multSeis', mapThis (arr, multSeis));