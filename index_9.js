let num = [5, 8, 4];
num[3] = 6;
num.push(7);
num.push(1);

var tamanho = num.length;
var lugar_certo = num.sort();

console.log(`nosso vetor é ${num} e tem ${tamanho} de tamanho`);
console.log(`nosso vetor em ordem é ${lugar_certo}`);

let array = [0, 11, 22, 33];
console.log(`Outro array: ${array}`);

for(var i = 0; i < array.length; i++){
    console.log(`1 - a posicao ${i} tem o numero ${array[i]}`);
}

for(let pos in array){
    console.log(`2 - a posicao ${pos} tem o numero ${array[pos]}`);
}

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(11,4));




