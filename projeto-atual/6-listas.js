console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//array
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos); 

listaDeDestinos.push(`Curitiba`); //adicionando item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); //deleta um na posicão 2 (a partir da posicao 2)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); //pega a posicao 1