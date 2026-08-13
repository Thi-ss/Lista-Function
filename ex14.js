function verificarAprovacao (media){

    if (media >= 6){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}

console.log (verificarAprovacao(10));