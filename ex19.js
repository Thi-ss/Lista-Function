function calcularMedia(nota1, nota2){
    return (nota1 + nota2)/2;
}

function verificarSituacao(media){

    if (media >=6){
        return "Aprovado";
    }else{
        return "Reprovado"
    }
}

let media = calcularMedia(8,7);
let situacao = verificarSituacao(media);

console.log(media);
console.log(situacao);