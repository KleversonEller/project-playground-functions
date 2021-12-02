// Desafio 1
function compareTrue(valorComparativo1, valorComparativo2) {
  // seu código aqui
  if(valorComparativo1 === true && valorComparativo2 === true){
    return true
  };
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavraSeparadas = [];
  let palavra = "";

  for(let comparador of frase){
    palavra += comparador;
    if(comparador === " "){
      palavraSeparadas.push(palavra);
      palavra = "";
    }
  }
  palavraSeparadas.push(palavra);
  return palavraSeparadas;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
let fraseFormada = (array[(array.length) -1] + ", " + array[0] );
return fraseFormada;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao = (wins * 3) + ties;
  return pontuacao;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let valorDeComparacao = null;
  let quantidadeRepete = null;

 for (let numero of array){
   if(valorDeComparacao === null){
     valorDeComparacao = numero;
   }
   if (valorDeComparacao === numero){
     quantidadeRepete += 1;
    }else if(valorDeComparacao < numero){
      quantidadeRepete = 1;
      valorDeComparacao = numero;
    }
  }
  return quantidadeRepete;
 }

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
