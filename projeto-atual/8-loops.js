console.log(`\n Trabalhando com loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\n Destinos possiveis:`)
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3){   

    if (listaDeDestinos[contador] == destino){
        console.log("Destino existente");
        destinoExiste = true;
        break;
    }else{
        console.log("Destino nao existe");
        destinoExiste = false;
    }
    contador += 1;
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro");
}

// for(let i = 0; i < 3; i++){

// } outra maneira alem do while