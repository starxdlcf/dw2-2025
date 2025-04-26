// ex 3

// function inverterArrayComReverse(arr) {
//     arr.reverse();
// }

// function inverterArraySemReverse(v) {
//     let newarr = []
//     for(let i=-1; i>=(v.length)*-1; i--){
        
//         newarr.push(v.at([i])) //adiciona no final do array o  elemento que está na posição i
//     }
//     return console.log(newarr)
    
// }

// const v = [1, 2, 3, 4, 5];
// const y = [6, 7, 8, 9, 10];

// inverterArrayComReverse(v);
// console.log(v); // [5, 4, 3, 2, 1]

// inverterArraySemReverse(v); // [10, 9, 8, 7, 6]




// ex 5

// const v1 = [1, 2, 3, 4, 5];

// // Usando o laço de repetição for
// const v21 = [];
// for (let i = 0; i < v1.length; i++) { //mesmo método do exercicio anterior, mudando apenas que é adicinado em ordem crescente (nao usei o at. pra percorrer de forma negativa o array)
//     v21.push(v1[i] * v1[i]);
// }

// // Usando a função map()
// const v22 = v1.map(i => i*i); //mapeia cada numero, executando a arrow function em que cada i (numero) vai retornar ele vezes ele mesmo

// console.log("FOR:", v21); // [1, 4, 9, 16, 25]
// console.log("MAP():", v22); // [1, 4, 9, 16, 25]

// EX 10

// const arr = ["mamão", "melancia", "abacaxi", "jaca", "melão", "morango"];

// arr.sort(function(x, y) {
//     return x.length - y.length;
// });

// console.log(arr);

// // ex 6

// const v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // letra A
// const v2 = [];
// for (let i = 0; i < v1.length; i++) {
//     if (v1[i] % 2 == 0) {
//         v2.push(v1[i]);
//     }
// }
// console.log("Pares com for:", v2); // [2, 4, 6, 8, 10]

// // letra B
// const v3 = v1.filter(num => num % 2 == 0);
// console.log("Pares com filter:", v3); // [2, 4, 6, 8, 10]


// ex 12

function encontrarMenorValor(arr) {
    let menor = arr[0];
    let posicao = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
            posicao = i;
        }
    }

    console.log("Menor valor:", menor);
    console.log("Posicao:", posicao);
}

const vetor = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
encontrarMenorValor(vetor);

// Saída:
// Menor valor: -5
// Posicao: 4
