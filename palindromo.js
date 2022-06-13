/* Descrição da atividade: 
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a 
direita ou vice-versa (ex.: raiar, ama, ovo, radar).
*/

//Opção 1
function verificaPalindromo (str){
    if (!str) return "string inexistente";

    return str.split("").reverse().join("") === str;
}
 
//Opção 2
function verificaPalindromo (str){
    if (!str) return "string inexistente";

    for (let i = 0; i < str.length /2; i++){
        if (str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }

    return true;
}

//Opção 3 - Para verificação de frases
function frasePalindrome (str) {
    let frase = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let fraseInversa = frase.split('').reverse().join('');
    return (frase === fraseInversa)
}