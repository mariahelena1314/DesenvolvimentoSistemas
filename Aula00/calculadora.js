// opção 1: media simples de duas notas 
// opção 2: media ponderada de 3 notas com pesos 2,3,5 

function mediaSimples(nota01, nota02){
    return (nota01 + nota02) / 2;
}

function mediaPonderada(n1,n2,n3){
    let m = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    return m;
}

console.log(mediaSimples(60,80));

let opção = 1;

switch (opção) {
    case 1:
        media = mediaSimples(60,70);
        console.log(`media simples: ${media} pontos`);
        break;

    case 2:
        media = mediaPonderada(60,90,40);
        console.log(`media ponderada: ${media} pontos`);
    default:
        console.log('opcao invalida');
        
        break;
}
