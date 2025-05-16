// Dado a tabela abaixo, solicite ao usuário o código do produto que ele deseja, exibindo o preço de venda (preço de compra mais o aumento de lucro) e a quantidade. Exiba ao usuário um extrato de compra com o produto selecionado, o preço de venda, quantidade desejada e total a pagar. 

let codigo = 3; 

if (codigo == 1) {
  let precoCompra = 1.00;
  let precoVenda = precoCompra + (precoCompra * 0.30);
  let quantidade = 6;
  let total = precoVenda * quantidade;

  console.log("Produto: Ovos");
  console.log("Preço de venda: R$ " + precoVenda);
  console.log("Quantidade: " + quantidade);
  console.log("Total a pagar: R$ " + total);

} else if (codigo == 2) {
  let precoCompra = 0.60;
  let precoVenda = precoCompra + (precoCompra * 0.25);
  let quantidade = 15;
  let total = precoVenda * quantidade;

  console.log("Produto: Pães");
  console.log("Preço de venda: R$ " + precoVenda);
  console.log("Quantidade: " + quantidade);
  console.log("Total a pagar: R$ " + total);

} else if (codigo == 3) {
  let precoCompra = 16.00;
  let precoVenda = precoCompra + (precoCompra * 0.45);
  let quantidade = 8;
  let total = precoVenda * quantidade;

  console.log("Produto: Café");
  console.log("Preço de venda: R$ " + precoVenda);
  console.log("Quantidade: " + quantidade);
  console.log("Total a pagar: R$ " + total);

} else {
  console.log("Código inválido.");
}