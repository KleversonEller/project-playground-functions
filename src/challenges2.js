// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
let resultado = null;
let cont = 0;

resultado = '('+array[0]+array[1]+')'+' '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];  
  if (array.length !== 11){
    resultado = "Array com tamanho incorreto.";
  }else { 
    for(let possicao of array){
      if (cont >= 3 || possicao < 0 || possicao > 9){
        resultado = "não é possível gerar um número de telefone com esses valores";
      }
      cont = 0;
      for(let possicao2 of array){
         if (possicao === possicao2){
           cont += 1;
         }
      }
    }
  }
 return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
