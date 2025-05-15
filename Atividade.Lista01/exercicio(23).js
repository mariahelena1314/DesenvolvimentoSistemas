// 23. Faça um programa para calcular uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. 
// a. Desconto do IR:
// i. Salário Bruto até 900 (inclusive) - isento
// ii. Salário Bruto até 1500 (inclusive) - desconto de 5%
// iii. Salário Bruto até 2500 (inclusive) - desconto de 10%
// iv. Salário Bruto acima de 2500 - desconto de 20%

// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220. Salário Bruto: (5 * 220)
// (-) IR (5%)
// (-) INSS ( 10%)
// (-) Sindicato (3%)
// FGTS (11%)
// Total de descontos
// Salário Líquido
// : R$ 1100,00
// : R$ 55,00
// : R$ 110,00
// : R$ 33,00
// : R$ 121,00
// : R$ 198,00
// : R$ 902,00

let bruto = 1000.00;
let ir;
let inss = bruto*0.10;
let sindicato = bruto*0.03;
let descontos;
let liquido;

if ( bruto <= 900){
    ir = bruto;
}
else if ( bruto <= 1500){
    ir = bruto *0.5
}
else if (bruto <= 2500){
    ir = bruto*0.1
}
else {
    ir = bruto * 0.2
}

descontos = ir + sindicato + inss;
liquido = bruto - descontos;

console.log(` Seu salario é: ${liquido} Reais`);




