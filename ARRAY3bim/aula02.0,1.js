let alunos = ['felipe' , 'gabriel' , 'klara' , 'livia'];

alunos = alunos.sort();

for( let i = 0; i < alunos.lenght; i++)  {

 console.log('* ' + alunos[i].toUpperCase());
}

if (alunos.indexOf('gabriel') != -1) {
    console.log('achei vc!');  
}
else {
    console.log('nao achei vc!');
    
}

console.log(alunos.includes('klara'));



