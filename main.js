//ESTRUTURAS DE CONTROLE
//IF, ELSE, IF ELSE
var idade = prompt("Qua sua idade?");
if (idade >= 18){
    idade = "maior";
    prompt("Você têm habilitação?");
} else {
    idade = "menor";
}
console.log(idade)


/* ARRAYS E MÉTODOS PARA SUA MANIPULAÇÃO
var listaVegetais = ['alface','couve','acelga','rúcula','espinafre', 'repolho'];
listaVegetais.push('cebolinha');
listaVegetais.reverse();
listaVegetais.pop();
//alert(listaVegetais.toString());
var compras = 'Hoje eu vou comprar ' + listaVegetais.join(', ') + '. Orgânicos e bem baratos!';

//OBJETOS (DICIONÁRIOS)
var alface = {tipo: 'folhagem', cor:'verde-claro', principalNutriente: 'cálcio'};
listaVegetais.push(alface);
console.log(listaVegetais[6].cor);

/*VARIÁVEIS
var pais = 'Brasil'
var frase = pais + ' é um dos países com maior qualidade de vida do mundo.'
var fraseMaiuscula = frase.toUpperCase();

console.log(fraseMaiuscula.replace('BRASIL','CANADÁ'));

var nome = 'Harry';
var anoNascimento = 1992;
var anoAtual = 2020;
var idade = (anoAtual - anoNascimento);
console.log(nome + ' tem ' + idade + ' anos de idade.');*/