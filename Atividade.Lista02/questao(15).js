// 15. Escreva uma função que tenha parâmetros padrão e teste chamá-la com diferentes combinações de argumentos.

function parabens(nome = "visitante"){
    return "parabens " + nome;
}

console.log(parabens());
