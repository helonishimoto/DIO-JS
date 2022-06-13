/* Descrição da atividade: Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
*/ 

function substituiPar (vetor) {
    if (!vetor) return -1;
    if (!vetor.length) return -1;

    for (let i = 0; i < vetor.length; i++){
        if (vetor [i] === 0){
            console.log("Já é zero");
        } else if (vetor[i] % 2 === 0) {
            console.log("Substituindo ${vetor[i]} por zero");
            vetor[i] = 0;
        } 
    }

    return vetor;
} 