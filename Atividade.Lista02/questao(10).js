//10. Implemente uma função que receba outra função como parâmetro (callback) e a execute.

function execute(funcao) {
    funcao();
}

execute(function(){
    console.log("funcao executada!");
});
