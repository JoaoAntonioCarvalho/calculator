import Calculadora from './Calculadora.js';
const calculadora = new Calculadora();

let resultArea = document.getElementById("result");
let equalsButton = document.getElementById("equal-button");

let operadores = document.querySelectorAll(".operator");

let botaoMais = document.getElementById("plus-button");
let botaoMenos = document.getElementById("botao-menos");
let botaoMultiplica = document.getElementById("botao-vezes");
let botaoDivisao = document.getElementById("botao-divisao");

let num1 = 0;
let num2 = 0;

let adicaoMode = false;
let subtracaoMode = false;
let multiplicacaoMode = false;
let divisaoMode = false;

equalsButton.addEventListener("click", () => {
  if ((resultArea.value.toString()).includes('.')) {
    num2 = parseFloat(resultArea.value);
  } else {
    num2 = parseInt(resultArea.value);
  };

  if (adicaoMode) {
    resultArea.value = calculadora.soma(num1, num2);
  };
  if (subtracaoMode) {
    resultArea.value = calculadora.subtrai(num1, num2);
  };
  if (multiplicacaoMode) {
    resultArea.value = calculadora.multiplica(num1, num2);
  };
  if (divisaoMode) {
    resultArea.value = calculadora.divide(num1, num2);
  };

  adicaoMode = false;
  subtracaoMode = false;
  multiplicacaoMode = false;
  divisaoMode = false;
});

operadores.forEach((operador) => {
  operador.addEventListener("click", () => {
    if (resultArea.value != '' && resultArea.value != '0') {
      if ((resultArea.value.toString()).includes('.')) {
        num1 = parseFloat(resultArea.value);
      } else {
        num1 = parseInt(resultArea.value);
      };
      resultArea.value = '';
    };
  });
});

//adição
botaoMais.addEventListener("click", () => {
  adicaoMode = true;
});

//subtração
botaoMenos.addEventListener("click", () => {
  subtracaoMode = true;
});

//multiplicação
botaoMultiplica.addEventListener("click", () => {
  multiplicacaoMode = true;
});

//divisão
botaoDivisao.addEventListener("click", () => {
  divisaoMode = true;
});