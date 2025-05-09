// Exercicio 07) Faça uma função que receba o salario de trabalho e o empréstimo, verifique se o empréstimo é até 20% do salario do trabalhador, se for, o empréstimo deve ser aprovado, caso contrario, dev ser rejeitado.  

function calcularEmprestimo(salario, emprestimo){
    salario = 1000;
    emprestimo = 2000;
    let porcentagemsalario = salario * 0.2;

    if (emprestimo > porcentagemsalario){
        console.log('o emprestimo foi negado');
    }
    else {
        console.log(' o emprestimo foi aprovado');
        
    }

    
}
calcularEmprestimo()