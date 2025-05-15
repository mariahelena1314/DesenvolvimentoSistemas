// 10. Faça um programa que receba o salário de um trabalhador e o valor da prestação de um empréstimo, se a prestação for maior que 20% do salário imprima: “Empréstimo não concedido”, caso contrário imprima: “Empréstimo concedido”.

let salario = 2500;
let emprestimo = 6000;
let porcentagemSalario = salario * 0.2;

if (emprestimo > porcentagemSalario){
    console.log(' Empréstimo NÃO concedido! ');
}
else {
    console.log(' Empréstimo concedido! ');
    
}