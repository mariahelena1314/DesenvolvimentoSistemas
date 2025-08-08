// 4- crie um array chamado nomes com os seguntes nomes: [ Ana , Carlos , Fernanda , joao] 

let nomes = [ 'Ana ' , 'Carlos' , ' Fernanda' , 'joao'];
// a) Localize o indice do nome 'fernanda' , e remova-o do array.

indicefe = nomes.indexOf('Fernanda');

if(indicefe != -1){
    nomes.splice(indicefe, 1);
    
}

console.log(nomes);

// b) Mostre o array apos a remoção.