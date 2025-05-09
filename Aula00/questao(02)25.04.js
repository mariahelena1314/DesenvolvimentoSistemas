let idade = 70;

if (idade <= 3) {
    console.log(idade, "É uma bebê");
}

else if (idade >= 4 && idade <= 11 ) {
    console.log(idade," é uma criança!")
}
else if (idade >= 12 && idade <= 14 ) {
    console.log(idade," é um pré-adolescente!")
}
else if (idade >= 14 && idade <= 17 ) {
    console.log(idade," é uma adolescente!")
}
else if (idade >= 18 && idade <= 64 ) {
    console.log(idade," é um adulto!")
}
else {
    console.log(idade," é um idoso!")
}