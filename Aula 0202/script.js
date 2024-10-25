// Nesta aula aprendi mais sobre tipo de dados. Temos os tipos primitivos, e os não primitivos. No caso todos são primitivos, com exceção dos objetos.

// Segue uma lista dos principais tipos:
var nome = 'Nathan'; // String
var idade = 21; // Number
var possuiFacul = false; // Boolean
var nada; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var objeto = {}; // Object

// Os tipos primitivos são imultáveis, ou seja,
// significa que os valores desses tipos não
// podem ser alterados diretamente. Uma vez criado,
// o valor de um tipo primitivo permanece o mesmo,
// e qualquer operação que pareça modificar o valor
// na verdade cria um novo valor. Isso é diferente de
// objetos e arrays, que são mutáveis.

// Exemplos de Imutabilidade:

// String:
let texto1 = "Olá";
texto1[0] = "H";  // Isso não vai alterar a string
console.log(texto1);  // Saída: "Olá"
// No exemplo acima, mesmo que você tente modificar o primeiro caractere da string, a operação falha porque strings são imutáveis. Para "modificar" uma string, você precisa criar uma nova:
let texto2 = "Olá";
texto2 = "Olá".replace("O", "H");  // Cria uma nova string
console.log(texto2);  // Saída: "Hlá"

// Number:
let numero = 42;
numero = numero + 1;  // Isso cria um novo valor 43 e o atribui à variável numero
console.log(numero);  // Saída: 43
// Aqui, a variável `numero` recebe um novo valor ao realizar a operação de soma. O valor original `42` não foi alterado, pois números são imutáveis.

// Para os tipos primitivos, qualquer operação que parece alterá-los na verdade cria um novo valor. Já para objetos e arrays (tipos não primitivos), você pode modificar as propriedades ou elementos diretamente.

// É possível verificar o tipo de dado usando o operador 'typeof', da seguinte forma:
var fazenda = 'Fazendinha alegre';
console.log(typeof fazenda);

// É possível também concatenar strings:
var primeiroNome = 'Nathan';
var sobrenome = 'Albuquerque';
console.log(primeiroNome + ' ' + sobrenome);

// Ao realizar uma concatenação entre número(s) e ao menos uma string, o resultado será string
var gols = 27;
var frase = 'Nathan fez ' + gols + ' gols no jogo!';
console.log(typeof frase);

// Diversas formas de definir strings:
// var superFacil = 'JavaScript é "super" fácil!'; // intercalando entre simples e dupla
// var superFacil = "JavaScript é 'super' fácil!"; // intercalando entre dupla e simples
// var superFacil = "JavaScript é \"super\" fácil"; // usando caractere de escape
// var superFacil = `JavaScript é "super" fácil`; // usando template string
// var superFacil = "JavaScript é "super" fácil!"; // inválido

// Template string é uma forma mais prática de concatenar valores com strings:
var faltas = 5;
var resolucao1 = 'Rogério recebeu ' + faltas + 'faltas ao todo.';
var resolucao2 = `Rogério recebeu ${faltas} faltas ao todo.`;



// EXERCÍCIOS:

// Declare uma variável contendo uma string
var animal = 'Girafa';
console.log(animal);

// Declare uma variável contendo um número dentro de uma string
var data1 = `${21} de Maio de ${2003}.`;
var data2 = 21 + ' de Maio de ' + 2003 + '.';
console.log(data1);
console.log(data2);

// Declare uma variável com a sua idade
var anos = 21;
console.log(anos);

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var pNome = 'Nathan';
var sNome = 'Albuquerque';
todoNome = pNome + sNome;
console.log(todoNome);

// Coloque a seguinte frase em uma variável: It's time
var hora = 'It\'s time';
console.log(hora);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof todoNome);
