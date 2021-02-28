console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:")
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1);
// }else{ //ou na mesma linha posso colocar else if
//     if(estaAcompanhada){
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1);
//     }else{        
//         console.log("Nao e maior de idade e nao posso vender"); 
//     }
// }

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Comprador maior de idade ou acompanhado de responsavel");
    listaDeDestinos.splice(2,1); //removendo item
}else{
    console.log("Nao e maior de idade e nao posso vender");
}

console.log("Embarque: \n\n"); //para pular duas linhas dentro de texto
if((idadeComprador >= 18 || estaAcompanhada == true) && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Voce nao pode embarcar");
}

//operadores logicos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);