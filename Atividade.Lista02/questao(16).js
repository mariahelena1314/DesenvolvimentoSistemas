// 16. Elabore uma função que receba o salário bruto de uma pessoa e calcule o salário líquido. Reduza do salário 5% se o salário bruto for até R$ 1.518,00, 7,5% se o salário bruto for até R$ 2.826,65, 15% se o saláriobruto for até R$ 3.751,05 e, 27,5%, se o salário for superior a R$ 3.751,05. Exiba o salário 
//  bruto, descontos e o salário líquido.


function salarioLiquido ( salarioBruto ){
    let desconto = 0;

    if ( salarioBruto  <= 1518.00 ){
       desconto =   salarioBruto * 0.05
    }
    if ( salarioBruto <= 2826.65 ){
        desconto =  salarioBruto * 0.075
        }
    if ( salarioBruto <= 3751.05 ){
         desconto =  salarioBruto * 0.15
    }
    if ( salarioBruto > 3751.05 ){
       desconto =  salarioBruto * 0.275 
    }
    let salarioLiquido = salarioBruto - desconto
    
}
console.log(salarioBruto("o salario foi: " + salarioBruto ));
console.log(desconto (" o desconto foi: " + desconto));
console.log((" o salario liquido foi :" + salarioLiquido));

// tentei fazer, mas sempre aparece esse erro e meu raciocinio ja nao sabe o que fazer!
