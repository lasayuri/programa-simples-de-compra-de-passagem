console.log("Trabalhando com atribuiçao de variáveis");

const idade = 23;
let nome = "Larissa"; //se colocar const, nao pode mudar o nome abaixo
const sobrenome = "Sayuri";

console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome;
console.log(nome);


let idadeNova; //declarando variavel, nao da pra fazer assim com const
idadeNova = 26; //atribuindo valor