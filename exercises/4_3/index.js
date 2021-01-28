// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 ,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 7;
let array = []
let resultado = '';

for (let index = 0; index < n; index+=1) {
    
        array.push('*')  
}
for (let index = 0; index < array.length; index+=1) {
    const element = array[index];
    resultado += element
    
}
for (let index = 0; index < n; index+=1) {
    console.log(resultado);
    
}

