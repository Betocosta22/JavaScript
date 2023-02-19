// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// Nan Not A Number (não é um numero)

const alura = "Alura";
console.log(alura*primeiroNumero)

// Tipo string

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhasupersegura456!";
const StringDeNumeros = "34567";
const citacao = "Meu nome é ";
const meuNome = "Beto";
console.log(citacao)

//concatenação (+)

console.log(citacao + meuNome)

//template string OU template literal

const cifrao = '\u0024';
const aMaiusculo ='\u0041';
const tique = '\u2705';
const hiragana ='\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Tipo Booleano

const primeiroNumero1 = 5;
const segundoNumero2 = 10;

// quando colocamos === fazemos uma verificação nós comparamos as duas const, se não fosse dividido por 2 seria false
console.log(primeiroNumero1 === segundoNumero2/2);

const texto3 = "alura";
const texto4 = "A";

console.log(texto3 === texto4);