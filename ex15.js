function classificarNota(nota){
    if (nota >= 9){
        console.log ("Excelente");
    }else if (nota >= 7 ){
        console.log ("Bom");
    }else if (nota == 6){
        console.log ("Aprovado")
    }else{
        console.log ("Reprovado");
    }
}
classificarNota(10)