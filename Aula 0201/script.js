var nome = 'Nathan';
let idade = 21;
const cristao = true;
console.log(nome, idade, cristao);

var sobrenome = 'Albuquerque', cidade = 'Jundiaí';
// posso omitir oo 'var' nas proximas declarações, mantendo apenas na primeira.

var precoApp;
console.log(precoApp);


/* NOME:
Os nomes podem iniciar com $, _, ou letras.
Podem conter números mas não iniciar com eles
Case sensitive
nome é diferente de Nome
Não utilizar palavras reservadas
https://www.w3schools.com/js/js_reserved.asp
Camel case
É comum nomearmos assim: abrirModal */


// HOISTING:
// São movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = 'André';
// Retorna undefined
var profissao = 'Designer';
console.log(profissao);
// Retornar Designer


//  EXERCÍCIO:
// Declarar uma variável com o seu nome
// Declarar uma variável com a sua idade
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
// Atribuir valor a sua comida favorita
// Declarar 5 variáveis diferentes sem valores

var nome = 'Nathan';
var minhaIdade = 21;
var comidaFavorita;
comidaFavorita = 'Manga';
var num1, num2, num3, num4, num5;
