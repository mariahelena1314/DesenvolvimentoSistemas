//  17. Elabore uma função para a partir do parâmetro preço da conta, calcule o valor da gorjeta que é de 10% sobre o valor da conta. Exiba o valor da conta, o valor da gorjeta e o valor total da conta.

function precoCompra( preco ){
    gorjeta = 0 
    precoTotal = 0
    if ( preco ){
        preco = preco
    } 
    if ( preco ){
        gorjeta = preco * 0.10 
    }
    if ( preco  ){
        precoTotal = preco + gorjeta 
    }

    
}
console.log(" O preco da compra foi :" + precoCompra (250) );
console.log( " O preco com as gorjeta foi: " + " R$ " + gorjeta );
console.log(" O valor total da compra foi: " +  " R$ " + precoTotal );


