// 5. Crie uma função chamada contarVogais que receba uma string e retorne o número de vogais (a, e, i, o, u) nela. Dica: Pesquise sobre o método indexOf();

function contarVogais(texto){
    let vogais = "aeiouAEIOU";
    let total = 0;
    for (let i = 0; i < texto.length; i++){
        if (vogais.indexOf(texto[i]) !== -1){
           total++;
        }
    }
    return total;   
}

