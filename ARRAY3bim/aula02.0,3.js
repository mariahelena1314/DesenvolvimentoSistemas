//questao
let nomes = ['Ana' , 'Bruno' , ' Carlos', 'Diana' , 'Eduardo'];

// 1) verifique se o nome 'Carlos' está na lista e, se estive, substitua por 'Caio'. includes()

let indice = nomes.indexOf('Carlos');

if(indice !== -1 ){
    nomes[indice] = 'caio'    
}
console.log(nomes);

// 2) Depois, remova o nome 'Ana'  do array.splice()

let indiceAna = nomes.indexOf('Ana')
if(indiceAna != -1){
    nomes.splice(indiceAna, 1);
}


// 03) mostrar o array final

console.log(nomes);


