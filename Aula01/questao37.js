// variáveis
let fatiaQueijo = 50; // 50g, cada fatia
let fatiaPresunto = 50; // 50g, cada fatia
let hamburguer = 100; 

// entrada
let sanduichesAFazer = 5; 

// processamento
let quiloQueijo = (sanduichesAFazer * fatiaQueijo*2) / 1000;
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;
let quiloHamburguer= (sanduichesAFazer * hamburguer) / 1000;

// saída
console.log("\t***LANCHONETE***");
console.log("para " + sanduichesAFazer + " sanduiches é necessário: ");
console.log("- " + quiloQueijo + "Kg de queijo");
console.log("- " + quiloPresunto+ "Kg de presunto");
console.log("- " + quiloHamburguer+ "Kg de hamburguer");



