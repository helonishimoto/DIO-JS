/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
} */

const pessoa1 = {
        nome: 'Heloísa',
        idade: 26,
    };

const pessoa2 = {
        nome: 'João',
        idade: 22,
    };


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

calculaIdade.call(pessoa1,3);

calculaIdade.apply(pessoa2, [3]); 