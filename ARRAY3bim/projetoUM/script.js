let array = [];


console.log("Tipo do meu array:" + typeof(array));

function adicionarnumero() {
    let input = document.querySelector('#numero');
    let n = parseInt(input.Value);
    let exibirArray = document.querySelector('exibir-array');

    // se n for não numerico, mostrara um alert e encerrara a função

    if(isNaN(n)){
    alert('digite um numero válido!');
    return;
    }
    
    array.push(n);

    // limpar o campo de entrada 

    input.Value = '';

    console.log(array);

    exibirArray.innerHTML = `Array: ${array} Tamanho do array ${array.length}`;
    
}


