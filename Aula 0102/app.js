É uma linguagem de programação interpretada, e não compilada.

Principais aplicações:
Front end: Manipulação do DOM, comunicação assíncrona com o back end e mais.
Back end: Comunicação com banco de dados, manipulação de arquivos e mais (Node).
Jogos: Geralmente se aproveitando de benefícios do HTML5.


Sintaxe Básica pt.1:

const nome = "André";

function somar(a, b) {
  return a + b;
}

somar(2, 4);
// resultado 6


Sintaxe Básica pt.2:

const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  btn.classList.add('ativo');
});
